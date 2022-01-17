// Компонент для отступа сверху в зависимости от платформы
import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#393939",
        paddingTop: Platform.OS === "android" ? "1%" : 0
    }
});
