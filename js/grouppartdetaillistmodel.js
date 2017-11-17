import React, {Component} from 'react'
//import GroupPartDetailList from './grouppartdetaillist'

export default class GroupPartDetailListModel extends Component {
	constructor(props) {
		super(props)
		this.state={
			headlist:this.props.showname,
			contentlist:this.props.showmessage,
			clickIndex:0
		}
	}
	//改变内容
	changeIndex(index){
		this.setState({
			clickIndex:index
		})
	}
	//传入的名称和数据
	render(){
		//生成头部点击位置
		let _head = this.state.headlist
		let _width = _head.length==1?"70px":"auto"
		let _headlist = _head.map((item,index)=>{
			let _headclickname = this.state.clickIndex == index?"GroupPartDetailListModelContentContentIsClick":"GroupPartDetailListModelContentContentIs"
			return(
				<div key={index}
				onClick={this.changeIndex.bind(this,index)}
					className={_headclickname}>
					{item}
				</div>
			)
		})
		let _fatherindex = this.props.fatherindex	//选取数组	
		let _content =this.state.contentlist.data[_fatherindex].showmessage 
		let _clickindex = this.state.clickIndex
		let _contentlist=_content[_clickindex].map((item,index)=>{
			return (
				<div key={index}
					className="GroupPartDetailListModelContentcontentLi">
					{item} 
				</div>
			)
		})
		return(
			<div className="GroupPartDetailListModelContent">
				<div className="GroupPartDetailListModelContentHead" style={{width:_width}}>
					{_headlist}
				</div>
				<div className="GroupPartDetailListModelContentcontent">
					{_contentlist}
				</div>
			</div>
		)
	}
}

//class GroupPartDetailListModelContentContent extends Component {
//	constructor() {
//		super()
//		this.headlist=props.headlist
//	}
//	render() {
//		let _head = this.state.headlist
//		return(
//			<div className='GroupPartDetailListModelContentcontent'>
//					<ul className="GroupPartDetailListModelContentcontentUl">
//							{
//							_head.map((item,index)=>{
//									return(
//									<li key={index} className="GroupPartDetailListModelContentcontentLi">
//										<p>{item.key}</p> 
//										<span>{item.value}</span> 
//									</li>
//									)
//							})
//		               }
//					</ul>
//			</div>
//		)
//	}
//}


//GroupPartDetailList.propTypes = {
//	obj: React.PropTypes.object.isRequired
//}

