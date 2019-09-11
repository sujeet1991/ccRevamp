import React,{Component} from 'react';


const filterHoc=(WrapperComponent)=>{
    class NewCom extends Component{
        constructor(props){
            super(props)
            this.state={
                cardtype:[]
            }
        }

        checkClick=(event)=>{
        let checktrue= event.target.checked;
        let activename=event.target.name;
       
        if(checktrue){
           this.setState(prevState=>({
            cardtype:[...prevState.cardtype,activename]
           }))

        }else{
            let getcardType=[...this.state.cardtype];
            var findindex= getcardType.indexOf(activename);
            
            if(findindex!==-1){
                getcardType.splice(findindex,1);
                this.setState({cardtype:getcardType})
            }
        }
        }
        UNSAFE_componentWillMount(){
            let data=JSON.parse(window.sessionStorage.getItem("cardtype"));
            if(data!==null){
                this.setState({
                    cardtype:data
                })
            }
           
            
        }
        render(){
            return(
                <WrapperComponent stateCheckbox={this.state.cardtype} checkClick={this.checkClick}/>
            )
        }
    }
    return NewCom
}
export default filterHoc;