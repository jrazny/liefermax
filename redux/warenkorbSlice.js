import { createSlice } from "@reduxjs/toolkit";

const warenkorbSlice = createSlice({
    name: "warenkorb",
    initialState: {
        produkt: [],
        gesamtbetrag: 0,
        wAnzahl: 0
    },
    reducers: {
        addProdukte: (state, action) => {
            state.produkt.push(action.payload);
            state.wAnzahl += 1;
            state.gesamtbetrag += action.payload.preis * action.payload.menge;
        },
        leeren: (state => {
            state = initialState;
        })
    },
})

export const { addProdukte, leeren } = warenkorbSlice.actions;
export default warenkorbSlice.reducer;