import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'motion_';
const categoryColor = '#4c97ff';

function register() {
    // x position
    registerBlock(`${categoryPrefix}xpos`, {
        message0: 'x position',
        args0: [],
        previousStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, () => {
        return [`util.target.x`, javascriptGenerator.ORDER_ATOMIC];
    })
}

export default register;
