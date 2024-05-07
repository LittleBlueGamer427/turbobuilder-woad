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
    }, () => {
        return [`util.target.x`, javascriptGenerator.ORDER_ATOMIC];
    })
    registerBlock(`${categoryPrefix}ypos`, {
        message0: 'y position',
        args0: [],
        output: null,
        previousStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, () => {
        return [`util.target.y`, javascriptGenerator.ORDER_ATOMIC];
    })
    registerBlock(`${categoryPrefix}dir`, {
        message0: 'direction',
        args0: [],
        output: null,
        previousStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, () => {
        return [`util.target.direction`, javascriptGenerator.ORDER_ATOMIC];
    })
    registerBlock(`${categoryPrefix}setaxis`, {
        message0: 'set %1 to %2',
        args0: [
            {
                "type": "field_dropdown",
                "name: "AXIS",
                "options": [
                    [ "x", "${VALUE}, util.target.y" ],
                    [ "y", "util.target.x, ${VALUE}" ],
                ]  
            },
            {
                "type": "input_value",
                "name: "VALUE",
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, () => {
        const AXIS = block.getFieldValue('AXIS')
        const VALUE = block.getFieldValue('VALUE')
        return [`util.target.setXY(${AXIS});`, javascriptGenerator.ORDER_ATOMIC];
    })
}

export default register;
