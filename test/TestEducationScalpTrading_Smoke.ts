import {capitalCom} from "../src/component/CapitalComApp";


describe ('TC_11.03.06_01 | Education > Menu Item [Scalp Trading]', async function () {
    before(async function() {
        await capitalCom.open;
    });

    it ('test', async function () {
        await capitalCom.loginButtonInHeader.clickButtonLogin();
        // $("").setValue("") заполнить поле значением
    });
    // it ('Compute Engine', async function (){
    //     await google.searchResults.clickLinkWithText();
    //     await google.computeEngine.clickButtonComputeEngine();
    //     // await google.calculator.selectMenuOption('');
    // });
    // it ('fill in the field Number of Instances', async function (){

        // await  estimate.numberfInstances.fillNumber();
        // await  browser.switchToFrame($("null"));
        // await  browser.switchToFrame($'([src*="calculator"][name="goog_983964356"])');
        // // await  browser.switchToFrame("iframe#myFrame");
        //
        // await $("#input_91").setValue(4);
        // await $("#select_value_label_83 div");

//     });
//
});