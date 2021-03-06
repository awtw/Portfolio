import { Component, OnInit } from '@angular/core';
import { Content, ToolList, ToolType } from '../content';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-center-content',
  templateUrl: './center-content.component.html',
  styleUrls: ['./center-content.component.scss']
})
export class CenterContentComponent implements OnInit {
  building = '../../../assets/images/info/building3.png';
  person = '../../../assets/images/info/043.png';
  person2 = '../../../assets/images/info/023.png';
  searchImage = '../../../assets/images/info/loupe.png';
  projectImage = '../../../assets/images/info/tag.png';
  roleImage = '../../../assets/images/info/account.png';
  toolImage = '../../../assets/images/info/tools.png';
  eraserImage = '../../../assets/images/info/eraser.png';
  // searchType = ToolType;
  searchType: ToolList[] = [];
  selectTypeList: ToolList[] = [];
  content: Content[] = [];
  contentStatic: Content[] = [];
  StringIsNumber = value => isNaN(Number(value)) === false;



  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit(): void {
    this.content = this.infoService.getContent();
    this.contentStatic = this.infoService.getContent();
    const temp = this.ToArray(ToolType);
    temp.forEach(x => {
      // if (x !== 'exe' && x !== 'Azure' && x !== 'Axure' && x !== 'stored procedure'){
      //   const tem: ToolList = {
      //     toolName: x,
      //     ifClick: false,
      //     toolID: ToolType[x]
      //   };
      //   this.searchType.push(tem);
      // }
       const tem: ToolList = {
          toolName: x,
          ifClick: false,
          toolID: ToolType[x]
        };
       this.searchType.push(tem);
    });
    console.log(this.searchType);

  }

  ToArray(enumme: any): any{
     return Object.keys(enumme).filter(this.StringIsNumber).map(key => enumme[key]);
  }

  clickTool(type: ToolList): void{
    // 把選擇的tool存進list
    const getTypeInList = this.selectTypeList.findIndex(x => x.toolID === type.toolID);
    this.selectTypeList.some(x => x.toolID === type.toolID) ?
    this.selectTypeList.splice(getTypeInList, 1) :
    this.selectTypeList.push(type);

    // 選擇後上色
    const findTool = this.searchType.find(x => x.toolID === type.toolID);
    this.searchType[findTool.toolID].ifClick = !this.searchType[findTool.toolID].ifClick;

    this.content = [];
    this.contentStatic.map(x => x.tool.map(y => y.ifClick = false));
    this.selectTypeList.forEach(select => {
      this.searchTypeInList(select);
    });
    // 若沒有選擇則給全部列表
    if (this.selectTypeList.length  < 1) {
      this.content = this.contentStatic;
      this.searchType.map(x => x.ifClick = false);
      this.contentStatic.map(x => x.tool.map(y => y.ifClick = false));
    }
    // console.log(this.selectTypeList);
    // console.log(this.content);
  }

  searchTypeInList(type: ToolList): void{
    console.log(type);
    this.contentStatic.forEach(data => {
      data.tool.forEach((o, index) => {
        if (o.toolID === type.toolID) {
          data.tool[index].ifClick = true;
          this.content.push(data);
        }
      });
    });
  }

  clear(): void {
    this.content = this.contentStatic;
    this.searchType.map(x => x.ifClick = false);
    this.contentStatic.map(x => x.tool.map(y => y.ifClick = false));
  }

}
