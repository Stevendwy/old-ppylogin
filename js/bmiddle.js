import React, {
	Component
} from 'react'

import MiddleContent from './bmiddlecontent'

export default class Middle extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="Bmiddle">
				<img className="BmiddleLeftImg" src="img/Pay/p_bannermindex.png" />
				<MiddleContent />
				<img className="BmiddleRightImg" src="img/Pay/p_bannerword.png" />
			</div>
		)
	}
}