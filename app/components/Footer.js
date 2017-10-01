import React, {Component} from 'react';
import {MenuFooter,MenuFooterLeft,Ul,Li,BoxArea,
        BoxContent,A,CompanyName} from "../style/Footer";


class Footer extends React.Component{
    render(){
        return(
            <div>
                <MenuFooter>
                    <MenuFooterLeft>
                        <BoxArea>
                            <BoxContent>
                                <Ul>
                                    <Li>
                                        <A href="/">Tuyển dụng</A> 
                                    </Li>    
                                    <Li>
                                        <A href="/">Liên hệ</A>
                                    </Li>  
                                    <Li>
                                        <A href="/">Forum</A>
                                    </Li>  
                                    <Li>
                                        <A href="/">Sơ đồ trang web</A>
                                    </Li>  
                                </Ul>    
                            </BoxContent>    
                        </BoxArea>    
                    </MenuFooterLeft>    
                </MenuFooter>   
                <CompanyName> Công ty MH  Stone </CompanyName>
            </div>    
        );
    }
}

module.exports=Footer;