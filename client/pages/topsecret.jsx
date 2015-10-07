import React from 'react';
import * as ReactBS from 'react-bootstrap';
import {Navigation, Router} from 'react-router';
import * as LD from 'lodash';

const HomePage = React.createClass({

  mixins : [Navigation],

  getInitialState() {
   return {
     initialBankSavings: 4294967296.69, initialExpenses: 0, tools: [], addlbl: '', skuin: '', typein: '', namein: '', costin: '', costQ: '', nameQ: '', searchdebug: '',
     isGreaterthan: true, costfilter: '>'
   }},

   handleChange(key, event) {
     this.setState({[key]: event.currentTarget.value});
   },

   handleAddClick(event) {
     const doesExist = _.find(this.state.tools, (tool) =>  {
       return tool.sku === this.state.skuin;
     });
     if(this.state.skuin == '' || this.state.namein == '' || this.state.typein == '' || this.state.costin==''){
       this.setState({addlbl: 'You have left an input field blank, please fill out all input fields.'});
       return;
     }

     this.setState({addlbl: 'The tool you enterred already exists in the armory!'});
     if(!isNaN(this.state.costin)){
         if(doesExist === undefined  || this.state.tools.length == 0){
           //array
           var temparray = this.state.tools.slice();
           var newexp = Number(this.state.initialExpenses) + Number(this.state.costin);
           temparray.push({sku: this.state.skuin, name : this.state.namein, type : this.state.typein, cost : Number(this.state.costin)});
           //update labels
           this.setState({initialExpenses: newexp,
             tools: temparray,
             addlbl: 'The item with SKU: ' + this.state.skuin + ', Type: ' + this.state.typein
              + ', Name: ' + this.state.namein + ', and Cost: $' + this.state.costin
              + ' has been added to the armory.'},
          );


         }
         else {
           this.setState({addlbl: 'The tool you enterred already exists in the armory!'});
         }

     }
     else {
       this.setState({addlbl: 'You have enterred an invalid cost; enter only numbers (XXXX.XX or XXXX)'});
     }

   },

  componentDidMount() {
    var {userid} = this.context.router.getCurrentQuery();
    if(userid != 1)
    {
      //router.transitionTo('/');
      this.replaceWith('/');
      console.log(this.context);
    }


  },

  render() {
    let initialBankSavings = this.state.initialBankSavings;
    let initialExpenses = this.state.initialExpenses;
    let tools = this.state.initialBankSavings;
    let addlbl = this.state.addlbl;
    let skuin = this.state.skuin;
    let typein = this.state.typein;
    let namein = this.state.namein;
    let costin = this.state.costin;
    let nameQ = this.state.nameQ;
    let costQ = this.state.costQ;
    let searchdebug = this.state.searchdebug;
    let costfilter = this.state.costfilter;

    const renderedArmory = _.map(this.state.tools, (tool) => {
      if(this.state.tools.length == 0){
        return null;
      }
      return (
        <ReactBS.ListGroupItem> SKU: {tool.sku}, Type: {tool.type}, Name: {tool.name}, Cost: ${tool.cost}</ReactBS.ListGroupItem>
      )
    }
    );

    const renderedNameSearch = _.map(this.state.tools, (tool) => {
      if(this.state.nameQ == '' && this.state.costQ == ''){
        return null;
      }
      else if(this.state.costQ == '' && tool.name.indexOf(this.state.nameQ) > -1){
        return (<ReactBS.ListGroupItem> SKU: {tool.sku}, Type: {tool.type}, Name: {tool.name}, Cost: ${tool.cost}</ReactBS.ListGroupItem>);
      }
      else if(tool.name.indexOf(this.state.nameQ) > -1 && this.state.costQ != '' && this.state.costfilter == "=" && tool.cost === Number(this.state.costQ)){ //
        return (<ReactBS.ListGroupItem> SKU: {tool.sku}, Type: {tool.type}, Name: {tool.name}, Cost: ${tool.cost}</ReactBS.ListGroupItem>);
      }
      else if(this.state.costQ != '' && this.state.costfilter == ">" && tool.cost > Number(this.state.costQ)){
        if(this.state.costQ == ''){
          return (<ReactBS.ListGroupItem> SKU: {tool.sku}, Type: {tool.type}, Name: {tool.name}, Cost: ${tool.cost}</ReactBS.ListGroupItem>);
        }
        else {
          if(tool.name.indexOf(this.state.nameQ) > -1) return (<ReactBS.ListGroupItem> SKU: {tool.sku}, Type: {tool.type}, Name: {tool.name}, Cost: ${tool.cost}</ReactBS.ListGroupItem>);
        }
      }
      else if(this.state.costQ != '' && this.state.costfilter == "<" && tool.cost < Number(this.state.costQ)){
        if(this.state.costQ == ''){
          return (<ReactBS.ListGroupItem> SKU: {tool.sku}, Type: {tool.type}, Name: {tool.name}, Cost: ${tool.cost}</ReactBS.ListGroupItem>);
        }
        else {
          if(tool.name.indexOf(this.state.nameQ) > -1) return (<ReactBS.ListGroupItem> SKU: {tool.sku}, Type: {tool.type}, Name: {tool.name}, Cost: ${tool.cost}</ReactBS.ListGroupItem>);
        }
      }
      else if(this.state.costQ != '' && this.state.costfilter == "=" && tool.cost === Number(this.state.costQ)){
        if(this.state.costQ == ''){
          return (<ReactBS.ListGroupItem> SKU: {tool.sku}, Type: {tool.type}, Name: {tool.name}, Cost: ${tool.cost}</ReactBS.ListGroupItem>);
        }
        else {
          if(tool.name.indexOf(this.state.nameQ) > -1) {
          return (<ReactBS.ListGroupItem> SKU: {tool.sku}, Type: {tool.type}, Name: {tool.name}, Cost: ${tool.cost}</ReactBS.ListGroupItem>);
        }
        }
      }

    }
  );

    return (

      <div>

        <ReactBS.Panel header={<h2>Bank Account</h2>}>
          <p style={{color: 'green'}}>Savings Account: ${initialBankSavings.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
        <p style={{color: 'red'}}>Expenses: ${initialExpenses.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
        </ReactBS.Panel>

        <ReactBS.Panel header={<h2>Shop</h2>}>
          <p>SKU <input type="text" value={skuin} placeholder = "Enter SKU of the tool"  onChange={this.handleChange.bind(null, 'skuin')} />
          Type <input type="text" value={typein} placeholder = "Enter type of the tool"  onChange={this.handleChange.bind(null, 'typein')} /> </p>
        <p>Name <input type="text" value={namein} placeholder = "Enter name of the tool"  onChange={this.handleChange.bind(null, 'namein')} />
          Cost <input type="text" value={costin} placeholder = "Enter cost of the tool as XXXX.XX"  onChange={this.handleChange.bind(null, 'costin')} /> </p>
        <ReactBS.Button bsStyle="primary" bsSize="medium" active onClick={this.handleAddClick}>Add Item to Armory</ReactBS.Button> {addlbl}
        </ReactBS.Panel>

        <ReactBS.Panel header={<h2>Search</h2>}>

        <p>Search by name <input type="text" value={nameQ} placeholder = "Enter name of the tool"  onChange={this.handleChange.bind(null, 'nameQ')} />
        Filter by cost that is <select value={costfilter} onChange={this.handleChange.bind(null, 'costfilter')}>
          <option value = ">"> > </option>
          <option value = "<"> {'<'} </option>
          <option value = "="> = </option>
          </select>
          <input type="text" value={costQ} placeholder = "this cost."  onChange={this.handleChange.bind(null, 'costQ')} />

        </p>
        <ReactBS.ListGroup>
          {renderedNameSearch}
        </ReactBS.ListGroup>
          {searchdebug}
        </ReactBS.Panel>

        <ReactBS.Panel header={<h2>Armory</h2>}>
            <ReactBS.ListGroup>
              {renderedArmory}
            </ReactBS.ListGroup>

          </ReactBS.Panel>


      </div>
    );
  },
});

/*
<ReactBS.ListGroup>
  <ReactBS.ListGroupItem> OZ-13MS "Dragoon" - Exoskeleton Armor</ReactBS.ListGroupItem>
  <ReactBS.ListGroupItem> GDCB-83F "Falling Crescent" - High Frequency Glaive  </ReactBS.ListGroupItem>
  <ReactBS.ListGroupItem> SBM-3W Mark III Pattern - Wrist Mounted Storm Bolter</ReactBS.ListGroupItem>
  <ReactBS.ListGroupItem> VOLHUD - Exoskeleton Installed HUD and GPS </ReactBS.ListGroupItem>
</ReactBS.ListGroup> */
export default HomePage;
