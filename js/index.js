import React, {
	Component
} from 'react'
import {
	render
} from 'react-dom'
import Top from './atop'
import Middle from './bmiddle'
import MiddleBottom from './bmiddlebottom'
import Bottom from './cbottom'
import GroupPartDetail from './grouppartdetailnew'
import FastClick from './fastclick'
class Page extends Component {

	componentDidMount() {
		FastClick.attach(document.body) //苹果点击延时处理
	}

	click() {
		sendEvent(middleEvents.bodyClick, {}) //增加了全局点击事件
	}

	render() {
		return (
			<div className="PageContainer">
				<Top />
				<Middle />
				<GroupPartDetail />
				<MiddleBottom />
				<Bottom />
			</div>
		)
	}
}

render(
	<Page/>,
	document.getElementById('ppyindex')
)