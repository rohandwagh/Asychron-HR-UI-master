import React,{Component} from 'react'
import hoc from '../hoc';
import styles from './Layout.module.css';
import Toolbar from '../../modules/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../modules/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
  
  state={
    showSideDrawer: false
  }
  sideDreawerCloseHandler=()=>{
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler =()=> {
      this.setState( (prevState) =>{
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render(){
    return(<hoc>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
          <SideDrawer 
          open={this.state.showSideDrawer}
          closed={this.sideDreawerCloseHandler} />
          < main className = {styles.Content} >
              {this.props.children}
          </main>
        </hoc>)
  }
}


export default Layout;
