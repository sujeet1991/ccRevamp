import React,{Component} from 'react';

const BasicVali=(WrappeCom)=>{
    class NewCom extends Component{
        render(){
            return (
                <WrappeCom name="sujeet"/>
            )
        }
    }
    return NewCom
}
export default BasicVali;