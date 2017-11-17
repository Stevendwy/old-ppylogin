import React, {
	Component
} from 'react'

export default class MiddleContent extends Component {
	constructor() {
		super()
		this.state = {
			trulUrl: "",
			phonenum: "",
			passwords: "",
			errword: ""
		}
	}
	handlePhone(e) {
		let value = e.target.value
		this.setState({
			phonenum: value
		})
	}
	handlePassword(e) {
		let value = e.target.value
		this.setState({
			passwords: value
		})
	}
	btnClick(e) {
		if (this.state.phonenum == "" || this.state.passwords == "") {
			this.setState({
				errword: "手机号和密码不能为空"
			})
		} else {
			let _url = "/login"
			let _obj = {
				username: this.state.phonenum,
				password: this.state.passwords
			}
			getAjax(_url, _obj, response => {
				console.log(response)
				let errwords = ""
				if (response.uu == "no_uername") {
					errwords = "手机号不正确."
				} else if (response.uu == "pwd_error") {
					errwords = "密码错误."
				} else if (response.uu == "card_err") {
					errwords = "卡号已绑定手机号，请使用手机号登录."
				} else if (response.uu == "1") {
					window.location.href = "/bindphone";
				} else {
					window.location.href = "/ppy";
				}
				this.setState({
					errword: errwords
				})
			})
		}
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="BmiddleContainer">
				<input type="text" className="BmiddleContainerCard" value={this.state.phonenum} onChange={this.handlePhone.bind(this)} placeholder="请输入手机号码/会员卡号"/>
				<input type="password" className="BmiddleContainerWord" value={this.state.passwords} onChange={this.handlePassword.bind(this)}  placeholder="请输入登录密码" />
				<div className="BmiddleContainerWrong">{this.state.errword}</div>
				<a href="/findpwd" className="BmiddleContainerPassword">忘记密码?</a>
				<input type="button" className="BmiddleContainerEnter" onClick={this.btnClick.bind(this)} value="登录" />
			</div>
		)
	}
}