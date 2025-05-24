import { View, Text } from 'react-native'
import React from 'react'
import GeneralTitle from '../General_title'
import { Icon } from 'react-native-elements'
import Icons from '../Icon'


interface RiflesC {
    titleFirstIcon: string;
    titleFirstIconType: string;
    title: string;
    titleSecondIcon: string;
    titleSecondIconType: string;
    themeColors: any;
}


const Home_title = ({
    titleFirstIcon,
    titleFirstIconType,
    title,
    titleSecondIcon,
    titleSecondIconType,
    themeColors
}: RiflesC ) => {
    return (
        <GeneralTitle
            icon={
                <Icon
                    name={titleFirstIcon}
                    type={titleFirstIconType}
                    color={themeColors.white}
                />
            }
            title={title}
            themeColors={themeColors}
            icon_two={
                <Icons
                    onPress={() => null}
                    style={{
                        backgroundColor: themeColors.green,
                        width: 32,
                        height: 32,
                        borderRadius: 9999,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                    icon={<Icon name={titleSecondIcon} color={themeColors.background} />}
                />
            }
        />
    )
}

export default Home_title