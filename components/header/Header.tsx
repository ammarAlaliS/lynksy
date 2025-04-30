
import { Animated, View } from "react-native";
import HeaderLogo from "./componets/headerLogo";
import ToggleMode from "./componets/icons/toggleMode";
import NotificationIcon from "./componets/icons/Notification";
import SendIcon_c from "./componets/icons/SendIcon_c";
import SelectionButton from "./componets/SelectionButton";
import { useState } from "react";
import HeaderTitle from "./componets/Title";

const HeaderComponent = ({ headerTranslateY, themeColors, setShowHeader, showHeader }: any) => {
    const [textTitle, setTextTitle] = useState('');
    const [showNoticationTitle, setShowNotificationTitile] = useState(false)

    return (
        <Animated.View
            style={{
                transform: [{ translateY: headerTranslateY }],
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: themeColors.background,
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                borderBottomWidth: 1,
                borderColor: themeColors.border,
                paddingHorizontal: 16,
                paddingVertical: 8
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 8
                }}
            >
                <HeaderLogo themeColors={themeColors} />
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8
                    }}
                >
                    <ToggleMode themeColors={themeColors} />
                    <NotificationIcon
                        themeColors={themeColors}
                        setShowHeader={setShowHeader}
                        setTextTitle={setTextTitle}
                        setShowNotificationTitile={setShowNotificationTitile}
                    />
                    <SendIcon_c 
                         themeColors={themeColors}
                         setShowHeader={setShowHeader}
                         setTextTitle={setTextTitle}
                         setShowNotificationTitile={setShowNotificationTitile}
                    />
                </View>
            </View>

            <View style={{
            }}>
                {
                    showNoticationTitle
                        ? <HeaderTitle themeColors={themeColors} title={textTitle} />
                        : <SelectionButton themeColors={themeColors} />
                }

            </View>

        </Animated.View>

    )
}

export default HeaderComponent