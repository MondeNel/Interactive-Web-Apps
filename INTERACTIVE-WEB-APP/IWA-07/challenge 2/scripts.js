const nickName = "Timmy";
const firstName = "Timothy";

// the OR operator checks for the first "truthy" value.
if (nickName === "Timmy" || firstName === "Timothy") {
    console.log(`Good Morning, ${nickName}!`);
} else {
    console.log(`Good Morning, ${firstName}!`);
}