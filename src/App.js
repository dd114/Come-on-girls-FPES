import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
    View,
    ScreenSpinner,
    AdaptivityProvider,
    AppRoot,
    ConfigProvider,
    SplitLayout,
    SplitCol,
    Panel, PanelHeader, Group, Cell, ContentCard, CardGrid, Header, Gallery, Separator, Div, Card
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import {Icon28MusicOutline, Icon28UserOutline, Icon28UsersOutline} from "@vkontakte/icons";

import generalPhoto1 from './photos/general/generalPhoto1.jpg'
import generalPhoto2 from './photos/general/generalPhoto2.jpg'
import generalPhoto3 from './photos/general/generalPhoto3.jpg'
import generalPhoto4 from './photos/general/generalPhoto4.jpg'
import generalPhoto5 from './photos/general/generalPhoto5.jpg'
import generalPhoto6 from './photos/general/generalPhoto6.jpg'
import generalPhoto7 from './photos/general/generalPhoto7.jpg'
import generalPhoto8 from './photos/general/generalPhoto8.jpg'
import generalPhoto9 from './photos/general/generalPhoto9.jpg'
import generalPhoto10 from './photos/general/generalPhoto10.jpg'

import diana1 from './photos/diana1.jpg'
import diana2 from './photos/diana2.jpg'
import diana3 from './photos/diana3.jpg'

import ksusha1 from './photos/ksusha1.jpg'
import ksusha2 from './photos/ksusha2.jpg'
import ksusha3 from './photos/ksusha3.jpg'

import camilla1 from './photos/camilla1.jpg'
import camilla2 from './photos/camilla2.jpg'
import camilla3 from './photos/camilla3.jpg'

import kristina1 from './photos/kristina1.jpg'
import kristina2 from './photos/kristina2.jpg'
import kristina3 from './photos/kristina3.jpg'

import katya1 from './photos/katya1.jpg'
import katya2 from './photos/katya2.jpg'
import katya3 from './photos/katya3.jpg'


const App = () => {
    const [appearance, setAppearance] = useState('light')
    // const [activePanel, setActivePanel] = useState('home');
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>)
    // const [popout, setPopout] = useState(null) // for developing

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                setAppearance(data.appearance)

                console.log(data)
            }
        });

        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo')
            setUser(user)
            setPopout(null)

            console.log(user)

        }

        fetchData();
    }, []);

    // const go = e => {
    // 	setActivePanel(e.currentTarget.dataset.to);
    // };

    return (
        <ConfigProvider appearance={appearance}>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout popout={popout}>
                        <Panel id="panel1">
                            <PanelHeader>?? ????-???? ????????</PanelHeader>
                            <Group
                                // header={<Header mode="primary"><div style={{fontSize: 35, padding: "0px 0 10px 0"}}>????????????!</div></Header>}
                            >
                                <Div size="l">

                                    <ContentCard
                                        onClick={() => {
                                        }}
                                        src={generalPhoto4}
                                        // subtitle="subtitle"
                                        // header={<div>????????????!<br/>???? ?????????????? ?????????????? ?????????????? ?? ???????????????????? ???????????? ?? ???????????????????????? ??????????????????!</div>}
                                        header={
                                            fetchedUser ? `???????????? ${fetchedUser.first_name}! ?? ?????????? ?????????????? ?????????????? ???????????????????? ???????????? ?? ???????????????????????? ??????????????????!????`
                                                : `???????????????? ?? ?????????? ?????????????? ?????????????? ???????????????????? ???????????? ?? ???????????????????????? ??????????????????!`
                                        }
                                        text={<div>?????????????????? ?????????? ?????????????? ?????????????????? ??????????????????, ?? ???????????? ???????? ????????
                                            ???????????????? ?? ??????????????????.<br/>?????????????? ???? ???????????? ???????????? ???? ?????? ?????????????? ??????????!
                                        </div>}
                                        // caption="Photo by Siyuan on Unsplash"
                                        // maxHeight={1500}
                                    />

                                </Div>

                            </Group>

                            {/*<Separator style={{ margin: "12px 0" }} />*/}

                            <Div size="l">

                                <Group
                                    header={<Header mode="primary">
                                        <div style={{fontSize: 35, padding: "5px 0 10px 0"}}>??????????</div>
                                    </Header>}
                                    // description=""
                                    mode="card"
                                >


                                    <Gallery
                                        slideWidth="90%"
                                        bullets="dark"
                                    >
                                        <img
                                            src={diana1}
                                            style={{display: "block"}}
                                        />
                                        <img
                                            src={diana2}
                                            style={{display: "block"}}
                                        />
                                        <img
                                            src={diana3}
                                            style={{display: "block"}}
                                        />
                                    </Gallery>


                                    <Card>
                                        {/*<div style={{ height: 96 }} />*/}
                                        {/*<div style={{height: 15}}/>*/}
                                        {/*<div style={{height: 15}}/>*/}

                                        <Div>
                                            ?????????????? ????????: ??????????????<br/>
                                            ???????? ??????????????: ????????<br/>
                                            ?????????????? ??????: ?????? ?????????? ?????? ???????? ????????<br/>
                                            ?????????????? ??????????????????????/????????????: ???????????? ????????????????, ABBA<br/>
                                        </Div>
                                    </Card>


                                </Group>


                                <Group
                                    header={<Header>
                                        <div style={{fontSize: 35, padding: "5px 0 10px 0"}}>??????????</div>
                                    </Header>}
                                    // description=""
                                    mode="card"
                                >
                                    <Gallery
                                        slideWidth="90%"
                                        bullets="dark"
                                    >
                                        <img
                                            src={ksusha2}
                                            style={{display: "block"}}
                                        />
                                        <img
                                            src={ksusha1}
                                            style={{display: "block"}}
                                        />
                                        <img
                                            src={ksusha3}
                                            style={{display: "block"}}
                                        />
                                    </Gallery>

                                    <Card
                                        // mode="outline"
                                    >
                                        {/*<div style={{ height: 96 }} />*/}
                                        {/*<div style={{height: 15}}/>*/}
                                        {/*<div style={{height: 15}}/>*/}

                                        <Div>
                                            ?????????????? ????????: ????????????????<br/>
                                            ???????? ??????????????: ????????????????<br/>
                                            ?????????????? ??????: ????????????<br/>
                                            ?????????????? ??????????????????????/????????????: Pyrokinesis, ?????? ?????? ??????????<br/>
                                        </Div>
                                    </Card>

                                </Group>

                                <Group
                                    header={<Header>
                                        <div style={{fontSize: 35, padding: "5px 0 10px 0"}}>??????????????</div>
                                    </Header>}
                                    //                                 description=""
                                    mode="card"
                                >
                                    <Gallery
                                        slideWidth="90%"
                                        bullets="dark"
                                    >
                                        <img
                                            src={camilla2}
                                            style={{display: "block"}}
                                        />
                                        <img
                                            src={camilla1}
                                            style={{display: "block"}}
                                        />
                                        <img
                                            src={camilla3}
                                            style={{display: "block"}}
                                        />
                                    </Gallery>

                                    <Card
                                        // mode="shadow"
                                    >
                                        {/*<div style={{ height: 96 }} />*/}
                                        {/*<div style={{height: 15}}/>*/}
                                        {/*<div style={{height: 15}}/>*/}

                                        <Div>
                                            ?????????????? ????????: ????????????????????<br/>
                                            ???????? ??????????????: ????????<br/>
                                            ?????????????? ??????: ??????????<br/>
                                            ?????????????? ??????????????????????/????????????: ??????????, Hollywood Undead<br/>
                                        </Div>
                                    </Card>


                                </Group>

                                <Group
                                    header={<Header>
                                        <div style={{fontSize: 35, padding: "5px 0 10px 0"}}>????????????????</div>
                                    </Header>}
                                    //                                 description=""
                                    mode="card"
                                >
                                    <Gallery
                                        slideWidth="90%"
                                        bullets="dark"
                                    >
                                        <img
                                            src={kristina1}
                                            style={{display: "block"}}
                                        />
                                        <img
                                            src={kristina2}
                                            style={{display: "block"}}
                                        />
                                        <img
                                            src={kristina3}
                                            style={{display: "block"}}
                                        />
                                    </Gallery>

                                    <Card
                                        // mode="tint"
                                    >
                                        {/*<div style={{ height: 96 }} />*/}
                                        {/*<div style={{height: 15}}/>*/}
                                        {/*<div style={{height: 15}}/>*/}

                                        <Div>
                                            ?????????????? ????????: ????????????, ??????????????????<br/>
                                            ???????? ??????????????: ????????????????<br/>
                                            ?????????????? ??????: ??????, ??????????<br/>
                                            ?????????????? ??????????????????????/????????????: Stray Kids<br/>
                                        </Div>
                                    </Card>


                                </Group>

                                <Group
                                    header={<Header>
                                        <div style={{fontSize: 35, padding: "5px 0 10px 0"}}>????????</div>
                                    </Header>}
                                    // description=""
                                    mode="card"
                                >
                                    <Gallery
                                        slideWidth="90%"
                                        bullets="dark"
                                    >
                                        <img
                                            src={katya2}
                                            style={{display: "block"}}
                                        />
                                        <img
                                            src={katya3}
                                            style={{display: "block"}}
                                        />
                                        <img
                                            src={katya1}
                                            style={{display: "block"}}
                                        />
                                    </Gallery>

                                    <Card>
                                        {/*<div style={{ height: 96 }} />*/}
                                        {/*<div style={{height: 15}}/>*/}
                                        {/*<div style={{height: 15}}/>*/}

                                        <Div>
                                            ?????????????? ????????: ??????????-??????????<br/>
                                            ???????? ??????????????: ??????<br/>
                                            ?????????????? ??????: ??????????????<br/>
                                            ?????????????? ??????????????????????/????????????: The neighborhood, crystal castles<br/>
                                        </Div>
                                    </Card>


                                </Group>


                                <Group
                                    header={<Header>?? ????-???? ?????????????? ????????</Header>}
                                    // description="?? ?????? ???????????? ?????????? ??????????-???? ?????????????????"
                                    mode="card"
                                >
                                    <Gallery
                                        slideWidth="90%"
                                        bullets="dark"
                                        // align="left"
                                    >
                                        <img
                                            src={generalPhoto2}
                                            style={{display: "block"}}
                                        />

                                        <img
                                            src={generalPhoto5}
                                            style={{display: "block"}}
                                        />

                                        <img
                                            src={generalPhoto6}
                                            style={{display: "block"}}
                                        />

                                        <img
                                            src={generalPhoto9}
                                            style={{display: "block"}}
                                        />

                                        <img
                                            src={generalPhoto7}
                                            style={{display: "block"}}
                                        />

                                        <img
                                            src={generalPhoto8}
                                            style={{display: "block"}}
                                        />

                                        <img
                                            src={generalPhoto10}
                                            style={{display: "block"}}
                                        />

                                        {/*<img*/}
                                        {/*    src={generalPhoto1}*/}
                                        {/*    style={{display: "block"}}*/}
                                        {/*/>*/}
                                        {/*<img*/}
                                        {/*    src={generalPhoto3}*/}
                                        {/*    style={{display: "block"}}*/}
                                        {/*/>*/}
                                    </Gallery>
                                </Group>


                                <Group>
                                    {/*<CardGrid size="l">*/}

                                    <ContentCard
                                        onClick={() => {
                                        }}
                                        src={generalPhoto3}
                                        subtitle={
                                            fetchedUser ? fetchedUser.sex === 2 ? `?????????????? ${fetchedUser.first_name}!`
                                                : `?????????????? ${fetchedUser.first_name}!` : ""
                                        }
                                        header="???? ?????????? ?????????? ???????? ?? ?????????? ??????????????????"
                                        text="16 ??????????, 18:00 ?? ???????????????????? ???????? ?????????? ??.??. ????????????????????"
                                        // caption="16 ??????????, 18:00 ?? ???????????????????? ???????? ?????????? ??.??. ????????????????????"
                                        // maxHeight={1500}
                                    />

                                    {/*</CardGrid>*/}

                                </Group>

                            </Div>


                        </Panel>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;
