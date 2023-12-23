import React from 'react';
import { GridComponent,Toolbar, ColumnsDirective, ColumnDirective, Page,Selection, Inject, Edit,
Sort,Search, Filter} from '@syncfusion/ej2-react-grids';

import {customersData, customersGrid } from '../data/dummy';
import {Header} from '../components';


const Customers = () => {
  return (
    <div className='sm:mt-14 m-2 md:m-10  p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers"/>
      <GridComponent
       dataSource={customersData} allowPaging allowSorting
       toolbar={['Search','Delete']}  
       editSettings={{allowDeleting: true,allowEditing:true}}
       width="auto" >
        <ColumnsDirective>
          {customersGrid.map((item,index)=>
          (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Search,Page,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers