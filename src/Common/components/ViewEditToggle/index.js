import React,{Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import withToggle from '../../hocs/withToggle'; 
import {EditToggleContainer,StyledInput,StyledEditBtn,StyledTitle,StyledContainer,StyledText} from './styledComponents';

@observer
class ViewEditToggle extends Component {
    @observable value = "Click on the edit button to start editing"
    
    handleEdit = () => {
        const {onToggle} = this.props;
        onToggle();
    }
    onChangeInputText = (event) => {
        this.value = event.target.value;
    }
    
    render() {
        const {toggleStatus} = this.props;
        return (
            <EditToggleContainer>
                <StyledTitle>{`ViewEditToggle`}</StyledTitle>
                <StyledContainer>
                    {!toggleStatus && <StyledText>{this.value}</StyledText>}
                    {toggleStatus && <StyledInput ref={this.inputRef} onChange={this.onChangeInputText} value={this.value} disabled={!toggleStatus}/>}
                    <StyledEditBtn onClick={this.handleEdit}>{!toggleStatus ? 'Edit' : 'Cancel'}</StyledEditBtn>
                </StyledContainer>
            </EditToggleContainer>
        );
    }
}

export default withToggle(ViewEditToggle);