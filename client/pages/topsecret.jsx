import React from 'react';
import * as ReactBS from 'react-bootstrap';
import {Navigation} from 'react-router';
import _ from 'lodash';

const HomePage = React.createClass({

  mixins : [Navigation],

  getInitialState() {
    return {
      initialBankSavings : 4294967296.69, initialExpenses : 0, tools : [],
      addlbl : '', skuin : '', typein : '',
      namein : '', costin : '', costQ : '', nameQ : '', searchdebug : '',
      costfilter : '>',
    };
  },

  componentDidMount() {
    var {userid} = this.context.router.getCurrentQuery();
    if (userid != 1) {
      // router.transitionTo('/');
      this.replaceWith('/');
    }


  },
  handleChange(key, event) {
      this.setState({[key] : event.currentTarget.value});
    },

  handleAddClick(event) {
      const doesExist = _.find(this.state.tools, { sku : this.state.skuin });
      if (this.state.skuin == '' || this.state.namein == ''
      || this.state.typein == '' || this.state.costin == '') {
        this.setState({addlbl :
         'You have left an input field blank, please fill out all input fields.'});
        return;
      }

      this.setState({addlbl : 'The tool you enterred already exists in the armory!'});
      if (!isNaN(this.state.costin)) {
        if (!doesExist || this.state.tools.length == 0) {
           // array
          var temparray = this.state.tools.slice();
          var newexp = Number(this.state.initialExpenses) + Number(this.state.costin);
          temparray.push({sku : this.state.skuin,
            name : this.state.namein, type : this.state.typein, cost : Number(this.state.costin)});
           // update labels
          this.setState({initialExpenses : newexp,
             tools : temparray,
             addlbl : 'The item with SKU: ' + this.state.skuin + ', Type: ' + this.state.typein
              + ', Name: ' + this.state.namein + ', and Cost: $' + this.state.costin
              + ' has been added to the armory.'},
          );


        } else {
          this.setState({addlbl : 'The tool you enterred already exists in the armory!'});
        }} else {
        this.setState({addlbl :
         'You have enterred an invalid cost; enter only numbers (XXXX.XX or XXXX)'});
      } },

  itemFinder(tool) {
        let fnd, blankn, blankc, c1, c2, c3;
        if (tool.name.indexOf(this.state.nameQ) > -1) fnd = true;
        if (this.state.nameQ === '') blankn = true;
        if (this.state.costQ === '') blankc = true;
        if (blankn && blankc) return false;

        if (this.state.costfilter === '=' && tool.cost === Number(this.state.costQ)) c1 = true;
        if (this.state.costfilter === '>' && tool.cost > Number(this.state.costQ)) c2 = true;
        if (this.state.costfilter === '<' && tool.cost < Number(this.state.costQ)) c3 = true;
        if ((blankn && c1) || (blankn && c2) || (blankn && c3) || (blankc && fnd))
          return true;
        if ((fnd && c1) || (fnd && c2) || (fnd && c3)) {
          return true;
        }

        return false;

      },

  render() {
    const initialBankSavings = this.state.initialBankSavings;
    const initialExpenses = this.state.initialExpenses;
    const tools = this.state.tools;
    const addlbl = this.state.addlbl;
    const skuin = this.state.skuin;
    const typein = this.state.typein;
    const namein = this.state.namein;
    const costin = this.state.costin;
    const nameQ = this.state.nameQ;
    const costQ = this.state.costQ;
    const searchdebug = this.state.searchdebug;
    const costfilter = this.state.costfilter;

    const renderedArmory = _.map(tools, (tool) => {
      return (
        <ReactBS.ListGroupItem> SKU: {tool.sku}, Type: {tool.type},
        Name: {tool.name}, Cost: ${tool.cost}</ReactBS.ListGroupItem>
      );
    }
    );

    const renderedNameSearch = _.map(tools, (tool) => {
      const isFound = this.itemFinder(tool);
      if (isFound) {
        return (<ReactBS.ListGroupItem> SKU: {tool.sku}, Type: {tool.type},
          Name: {tool.name}, Cost: ${tool.cost}</ReactBS.ListGroupItem>);
      }
      if (!isFound) return null;
    });

    return (

      <div>

        <ReactBS.Panel header={<h2>Bank Account</h2>}>
          <p style={{color : 'green'}}>Savings Account:
            ${initialBankSavings.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
        <p style={{color : 'red'}}>Expenses:
          ${initialExpenses.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
        </ReactBS.Panel>

        <ReactBS.Panel header={<h2>Shop</h2>}>
          <p>SKU <input type="text" value={skuin} placeholder = "Enter SKU of the tool"
            onChange={this.handleChange.bind(null, 'skuin')} />
          Type <input type="text" value={typein} placeholder = "Enter type of the tool"
          onChange={this.handleChange.bind(null, 'typein')} /> </p>
        <p>Name <input type="text" value={namein} placeholder = "Enter name of the tool"
          onChange={this.handleChange.bind(null, 'namein')} />
          Cost <input type="text" value={costin} placeholder = "Enter cost of the tool as XXXX.XX"
          onChange={this.handleChange.bind(null, 'costin')} /> </p>
        <ReactBS.Button bsStyle="primary" bsSize="medium"
          onClick={this.handleAddClick}>Add Item to Armory</ReactBS.Button> {addlbl}
        </ReactBS.Panel>

        <ReactBS.Panel header={<h2>Search</h2>}>

        <p>Search by name <input type="text" value={nameQ} placeholder = "Enter name of the tool"
          onChange={this.handleChange.bind(null, 'nameQ')} />
        Filter by cost that is <select value={costfilter}
        onChange={this.handleChange.bind(null, 'costfilter')}>
          <option value = ">"> > </option>
          <option value = "<"> {'<'} </option>
          <option value = "="> = </option>
          </select>
          <input type="text" value={costQ} placeholder = "this cost."
            onChange={this.handleChange.bind(null, 'costQ')} />

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

export default HomePage;
