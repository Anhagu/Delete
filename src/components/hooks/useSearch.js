import create from 'zustand';

const useSearch = create((set) => ({
    searchItems: [],
    addSearch: (items) => set((state) =>({
        searchItems : [items, ...state.searchItems]
    })),
}));

export default useSearch;