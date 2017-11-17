import React, {Component} from 'react'
//import GroupPartDetailList from './grouppartdetaillist'
import GroupPartDetailListModel from './grouppartdetaillistmodel'
import {headmessage} from './datas'

export default class GroupPartDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			detailObj: headmessage
		}
		this.pid = ""
	}
	
//	componentDidMount() {
//		
//	}
	
//	componentWillReceiveProps(props) {
//		let _pid = props.pid
//		if(this.pid == _pid) return
//		this.pid = _pid
//			
//		let _url = "/ppyvin/partprices"
//		let _obj = {
//			code: params.code,
//			part: this.pid
//		}
//		getAjax(_url, _obj, response => {
//			this.setState({
//				detailObj: response
//			})
//		})
//		this.setState({
//				detailObj: headmessage
//		})
		
//	}
	
	render() {
		let _model = this.state.detailObj
		let _modellist = _model.data.map((item,index)=>{
			let _showmessage = _model
			return(
				<GroupPartDetailListModel key={index} fatherindex={index} showname={item.headname} showmessage={_model}/>
			)
		})
		return (
			<div className="GroupPartDetailListModelContentcontentFather">
				{_modellist}
			</div>
			
		)
	}
}
