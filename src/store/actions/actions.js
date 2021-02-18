export const TOGGLE_FAV = 'TOGGLE_FAV';
export const SELECTED_HP = 'SELECTED_HP';
export const SELECTED_SIZE = 'SELECTED_SIZE';
export const SELECTED_MOC = 'SELECTED_MOC';
export const SELECTED_TEXT = 'SELECTED_TEXT';
export const SELECTED_FLOW = 'SELECTED_FLOW';
export const SELECT_FITTING = 'SELECT_FITTING';
export const SELECT_UNION = 'SELECT_UNION';
export const SELECT_PURPOSE = 'SELECT_PURPOSE';
export const SELECT_MICRON = 'SELECT_MICRON';
export const SELECT_CARTRIDGES = 'SELECT_CARTRIDGES';
export const SELECT_OPENEND = 'SELECT_OPENEND';
export const SELECT_SHEETTYPE = 'SELECT_SHEETTYPE';
export const SELECT_SHEETSIZE = 'SELECT_SHEETSIZE';
export const SELECT_SHEETIH = 'SELECT_SHEETIH';
export const RESET = 'RESET';

export const toggleFav = id => {
    return{
        type: TOGGLE_FAV,
        productId: id
    };
}

export const selectedhp = (id, value) => {
    return{
        type: SELECTED_HP,
        productId: id,
        value: value
    }
}

export const selectedsize = (id, value) => {
    return{
        type: SELECTED_SIZE,
        productId: id,
        value: value
    }
}

export const selectedmoc = (id, value) => {
    return{
        type: SELECTED_MOC,
        productId: id,
        value: value
    }
}

export const selectedflowrate = (id, value) => {
    return{
        type: SELECTED_FLOW,
        productId: id,
        value: value
    }
}

export const selectedfitting = (id, value) => {
    return{
        type: SELECT_FITTING,
        productId: id,
        value: value
    }
}

export const selectedunion = (id, value) => {
    return{
        type: SELECT_UNION,
        productId: id,
        value: value
    }
}

export const selectedpurpose = (id, value) => {
    return{
        type: SELECT_PURPOSE,
        productId: id,
        value: value
    }
}

export const selectedtext = (id, value) => {
    return{
        type: SELECTED_TEXT,
        productId: id,
        value: value
    }
}

export const selectedmicron = (id, value) => {
    return{
        type: SELECT_MICRON,
        productId: id,
        value: value
    }
}

export const selectedcartiridges = (id, value) => {
    return{
        type: SELECT_CARTRIDGES,
        productId: id,
        value: value
    }
}

export const selectedopenend = (id, value) => {
    return{
        type: SELECT_OPENEND,
        productId: id,
        value: value
    }
}

export const selectedsheettype = (id, value) => {
    return{
        type: SELECT_SHEETTYPE,
        productId: id,
        value: value
    }
}

export const selectedsheetsize = (id, value) => {
    return{
        type: SELECT_SHEETSIZE,
        productId: id,
        value: value
    }
}

export const selectedsheetih = (id, value) => {
    return{
        type: SELECT_SHEETIH,
        productId: id,
        value: value
    }
}

export const reset = () => {
    return{
        type: RESET
    }
}
