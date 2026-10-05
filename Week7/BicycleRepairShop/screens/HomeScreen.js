import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function HomeScreen(props) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
    colors={[Colors.accent500, Colors.primary800]}
    start={styles.container}
    >
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Title>Fixin' Bikes</Title>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Service Time:</Text>

            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabel}
            />
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkBoxHeader}>Service Options:</Text>

              <View style={styles.checkBoxSubContainer}>
                {props.services.map((item) => {
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={`${item.name} ($${item.price})`}
                      onPress={props.onSetServices.bind(this, item.id)}
                      textStyle={{
                        textDecorationLine: "none",
                        color: Colors.primary300,
                      }}
                      innerIconStyle={{
                        borderRadius: 0,
                        borderColor: Colors.primary300,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.primary300}
                      style={styles.checkBox}
                    />
                  );
                })}
              </View>
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Newsletter Signup ($0)</Text>

              <Switch
                onValueChange={props.onSetNewsletter}
                value={props.newsletter}
                thumbColor={
                  props.newsletter ? Colors.primary300 : Colors.primary800
                }
                trackColor={{
                  false: "#767577",
                  true: "#81b0ff",
                }}
              />
            </View>

            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Rental Membership ($100)</Text>

              <Switch
                onValueChange={props.onSetRentalMembership}
                value={props.rentalMembership}
                thumbColor={
                  props.rentalMembership ? Colors.primary300 : Colors.primary800
                }
                trackColor={{
                  false: "#767577",
                  true: "#81b0ff",
                }}
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onNext={props.onNext}>Submit Appointment</NavButton>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 30,
    borderColor: Colors.primary300,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary300,
    fontFamily: "Note",
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabel: {
    fontSize: 15,
    color: Colors.primary300,
    fontFamily: "Note",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {
    width: "100%",
    alignItems: "center",
  },
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary300,
    fontFamily: "Note",
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  checkBox: {
    marginVertical: 5,
    width: "100%",
  },
  addOnsContainer: {
    justifyContent: "space-between",
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "Note",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
