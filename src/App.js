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
    // const [popout, setPopout] = useState(<ScreenSpinner size='large' />)
    const [popout, setPopout] = useState(null) // for developing

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                setAppearance(data.appearance)

                console.log(data)
            }
        });

        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null)
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
                            <PanelHeader>А ну-ка ФЗЧС</PanelHeader>
                            <Group
                                // header={<Header mode="primary"><div style={{fontSize: 35, padding: "0px 0 10px 0"}}>Привет!</div></Header>}
                            >
                                <CardGrid size="l">

                                    <ContentCard
                                        onClick={() => {
                                        }}
                                        src={generalPhoto4}
                                        // subtitle="subtitle"
                                        // header={<div>Привет!<br/>На проводе команда девушек с факультета защиты в чрезвычайных ситуациях!</div>}
                                        header="Привет🔥 С вами команда девушек факультета защиты в чрезвычайных ситуациях!"
                                        text={<div>Участницы нашей команды абсолютно уникальны, у каждой есть свои интересы и увлечения.<br/>Давайте же узнаем о каждой из них больше!</div>}
                                        // caption="Photo by Siyuan on Unsplash"
                                        // maxHeight={1500}
                                    />

                                </CardGrid>

                            </Group>

                            {/*<Separator style={{ margin: "12px 0" }} />*/}

                            <CardGrid size="l">

                                <Group
                                    header={<Header mode="primary">
                                        <div style={{fontSize: 35, padding: "5px 0 10px 0"}}>Диана</div>
                                    </Header>}
                                    // description=""
                                    mode="card"
                                >


                                    <Gallery slideWidth="90%" bullets="dark">
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
                                            Любимый цвет: Красный<br/>
                                            Знак зодиака: Овен<br/>
                                            Любимая еда: Все блюда где есть яица<br/>
                                            Любимый исполнитель/группа: Муслим Магомаев, ABBA<br/>
                                        </Div>
                                    </Card>


                                </Group>


                                <Group
                                    header={<Header>
                                        <div style={{fontSize: 35, padding: "5px 0 10px 0"}}>Ксюша</div>
                                    </Header>}
                                    // description=""
                                    mode="card"
                                >
                                    <Gallery slideWidth="90%" bullets="dark">
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
                                            Любимый цвет: Бордовый<br/>
                                            Знак зодиака: Близнецы<br/>
                                            Любимая еда: Мамина<br/>
                                            Любимый исполнитель/группа: Pyrokinesis, Три дня дождя<br/>
                                        </Div>
                                    </Card>

                                </Group>

                                <Group
                                    header={<Header>
                                        <div style={{fontSize: 35, padding: "5px 0 10px 0"}}>Камилла</div>
                                    </Header>}
                                    //                                 description=""
                                    mode="card"
                                >
                                    <Gallery slideWidth="90%" bullets="dark">
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
                                            Любимый цвет: Фиолетовый<br/>
                                            Знак зодиака: Дева<br/>
                                            Любимая еда: Паста<br/>
                                            Любимый исполнитель/группа: Сплин, Hollywood Undead<br/>
                                        </Div>
                                    </Card>



                                </Group>

                                <Group
                                    header={<Header>
                                        <div style={{fontSize: 35, padding: "5px 0 10px 0"}}>Кристина</div>
                                    </Header>}
                                    //                                 description=""
                                    mode="card"
                                >
                                    <Gallery slideWidth="90%" bullets="dark">
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
                                            Любимый цвет: Черный, оранжевый<br/>
                                            Знак зодиака: Скорпион<br/>
                                            Любимая еда: Вок, лапша<br/>
                                            Любимый исполнитель/группа: Stray Kids<br/>
                                        </Div>
                                    </Card>



                                </Group>

                                <Group
                                    header={<Header>
                                        <div style={{fontSize: 35, padding: "5px 0 10px 0"}}>Катя</div>
                                    </Header>}
                                    // description=""
                                    mode="card"
                                >
                                    <Gallery slideWidth="90%" bullets="dark">
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
                                            Любимый цвет: Темно-синий<br/>
                                            Знак зодиака: Рак<br/>
                                            Любимая еда: Солянка<br/>
                                            Любимый исполнитель/группа: The neighborhood, crystal castles<br/>
                                        </Div>
                                    </Card>



                                </Group>

                                <Group
                                    header={<Header>Карусель общих фоток</Header>}
                                    description="А тут вообще нужно какое-то описание?"
                                    mode="card"
                                >
                                    <Gallery slideWidth="90%" bullets="dark">
                                        <img
                                            src={generalPhoto2}
                                            style={{display: "block"}}
                                        />
                                        <img
                                            src={generalPhoto1}
                                            style={{display: "block"}}
                                        />
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
                                        subtitle="Еще одна общая фотка?"
                                        header="Уау, какой заголовок"
                                        text="Мини текст под"
                                        caption="И подпись еще чуть меньше"
                                        // maxHeight={1500}
                                    />

                                    {/*</CardGrid>*/}

                                </Group>

                            </CardGrid>


                        </Panel>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;
