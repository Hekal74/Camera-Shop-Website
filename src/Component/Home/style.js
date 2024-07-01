import styled from 'styled-components'
export const Hoome = styled.div`
    height: 400px; 
    background-image: url("images/Navbar/wp2505911.webp");
    background-size: cover;
    background-position:center ;
    text-align: center;
    background-attachment: fixed;
    padding-top:1%;
    width:112%;
    
    `


export const Container = styled.div`
    width: 100%;
    // position: absolute;
    // top: 35%;
    // left:55%;
    transform:translate(-50%,-50%)
    border:0px;
    // margin-left:20px
`
 

export const Hometitle = styled.h2`
// background: linear-gradient(45deg, #ff0000, #00ff4e);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
    color:white;
    margin-top:8%;
    font-weight: bold;
    font-size:60px;
    font-style: italic;

`
  

export const Homeinfo = styled.h4`
    margin-bottom: 20px;
    font-size:35px;
    color:#eb5424
    `



export const Homedesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;
`
    
  

export const Span = styled.span`
    color: #000
`

export const Homebtn = styled.button`
    padding: 15px ;
    width: 150px;
    background-color:#eb5424;
    color: white;
    border:none;
    font-size: 18px;
    font-weight: bold;

    &:hover
        {
            color:#eb5424;
            background-color: white;
        }
`