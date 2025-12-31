import { Colors } from "@/constants/theme";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";
import {
  StyleSheet,
  Appearance,
  Platform,
  Text,
  Image,
  FlatList,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);

  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const seperatorComp = <View style={styles.separator}></View>;

  return (
    <Container>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={seperatorComp}
        data={MENU_ITEMS}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      />
    </Container>
  );
}

type Theme = {
  text: string;
  background: string;
  headerBackground: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
};

function createStyles(theme: Theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: 300,
      marginHorizontal: "auto",
      marginBottom: 10,
    },
  });
}
