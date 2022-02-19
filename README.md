# Angular Horizontal Scroll table

angular-horizontal-scroll-table is A simple solution for horizontal scroll in any table.



[Live Demo "StackBlitz ⚡️"](https://stackblitz.com/edit/angular-ivy-4pgi6r)


<a href="https://www.npmjs.com/package/angular-horizontal-scroll-table"><img src="https://img.shields.io/badge/npm-v1.0.0-blue" alt="npm latest version" ></a>


## Installation

Install the npm package.
```
  npm i angular-horizontal-scroll-table
```
Import module:
```ts
  import { NgHorizontalScrollModule } from 'angular-fixed-header-table';

  @NgModule({
      imports: [
      NgHorizontalScrollModule
      .....
      ]
  })
```


## Usage

- add the directive selector (bassHorizontalScroll) on div that have the table, and give it id of your table, thead and thead tr.
  ex:
```html
  <div class="overflow-auto p-2 " bassHorizontalScroll [tableId]="'cutomTableId'"
    [tableTHeadId]="'cutomTableTHeadId'" [tableTHeadTrId]="'cutomTableTHeadTrId'"
     [pageUpdated]="pageUpdated" [pageDestored]="pageDestored">
    <table id="cutomTableId" class="table table-striped table-bordered table-hover">
      <thead id="cutomTableTHeadId">
        <tr id="cutomTableTHeadTrId">
          <th scope="col" class="heightAndwidth thStyles">Email</th>
          <th scope="col" class="heightAndwidth thStyles">Name</th>
        </tr>
      </thead>
      <tbody id="cutomTableTBodyId">
        <tr *ngFor="let item of dataList">
          <td class="heightAndwidth">{{item.email}}</td>
          <td class="heightAndwidth">{{item.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
```



- pageUpdated input you can toggle it when u want to resize the the bar.
    like the table columns changed.

```ts
this.pageUpdated = !this.pageUpdated;
```

## CSS configurations
- this styles to change scrollbar shape, not important if you like the default style.

```css
 #BassScrollBar::-webkit-scrollbar,
.BassBarContainer::-webkit-scrollbar {
  width: 10px;
  height: 17px;
  background: transparent;
}

#BassScrollBar::-webkit-scrollbar-thumb,
.BassBarContainer::-webkit-scrollbar-thumb {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(0 0 0 / 40%)),
    color-stop(0.72, rgb(0 0 0 / 40%)),
    color-stop(0.86, rgb(0 0 0 / 40%))
  );
  border: #b0acac 1px solid;
  border-radius: 5px;
}
#BassScrollBar::-webkit-scrollbar-thumb:hover,
.BassBarContainer::-webkit-scrollbar-thumb:hover {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(0 0 0 / 67%)),
    color-stop(0.72, rgb(0 0 0 / 67%)),
    color-stop(0.86, rgb(0 0 0 / 67%))
  );
}
```


## Directive options ( inputs )
- tableId        : give it your table Id.
- tableTHeadId   : give it your table thead Id.
- tableTBodyId   : give it your table tbody Id.
- pageUpdated    : toggle it when tab changed, or u want to resize the the scroll bar again.
- pageDestored   : toggle it when tab destored.
