import Box from "@src/components/Box/Box";
import Text from '@src/components/Text/Text'
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";

export default function HomeScreen(){
    return(
        <>
            <Box
              tag="main"
              
              styleSheet={{
                backgroundColor: 'red',
                border: '10px solid black',
                flex: 1
              }}
              
            >
                <Background></Background>
                <Menu></Menu>
                <Feed>
                    <Feed.Header/>
                    <Text>
                        Últimas Atualizações
                    </Text>
                    <Feed.Posts/>
                </Feed>
                <Footer></Footer>
            </Box>
        </>
    )
}