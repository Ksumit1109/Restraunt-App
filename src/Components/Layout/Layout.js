import Header from './Header/Header'
import Body from './Body/Body'

const Layout = (props)=>{
    return (
        <>
            <Header Onclick={props.showCart}/>
            <Body/>
        </>
    )
}

export default Layout;