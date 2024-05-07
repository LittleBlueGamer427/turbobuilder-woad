import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'motion_';
const categoryColor = '#4c97ff';

function register() {
    // x position
    registerBlock(`${categoryPrefix}xpos`, {
        message0: 'x position',
        args0: [],
        output: null,
        previousStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        return [`util.target.x`, javascriptGenerator.ORDER_ATOMIC];
    })
    registerBlock(`${categoryPrefix}ypos`, {
        message0: 'y position',
        args0: [],
        output: null,
        previousStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        return [`util.target.y`, javascriptGenerator.ORDER_ATOMIC];
    })
    registerBlock(`${categoryPrefix}dir`, {
        message0: 'direction',
        args0: [],
        output: null,
        previousStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        return [`util.target.direction`, javascriptGenerator.ORDER_ATOMIC];
    })
    registerBlock(`${categoryPrefix}setx`, {
        message0: 'set x to %1',
        args0: [
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
        const code = `util.target.setXY(${'VALUE'}, util.target.y)`;
        return `${code}\n`;
    })
    registerBlock(`${categoryPrefix}sety`, {
        message0: 'set y to %1',
        args0: [
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
        const code = `util.target.setXY(util.target.x, ${VALUE})`;
        return `${code}\n`;
    })
}

export default register;
