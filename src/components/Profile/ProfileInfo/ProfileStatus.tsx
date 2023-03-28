import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
    status:string
    updateStatus:(status:string) => void
}


class ProfileStatus extends React.Component<ProfileStatusPropsType>{

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditeMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditeMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)

    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !==this.props.status) {
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditeMode}>{this.props.status || 'empty status'}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input onChange={this.onChangeHandler} value={this.state.status }
                               onBlur={this.deactivateEditeMode} autoFocus/>
                    </div>
                }
            </div>
        );
    }


}

export default ProfileStatus;