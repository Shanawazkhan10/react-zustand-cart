// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// const cartStore = (set, get) => ({
//     cart: [],
//     count: 0,
//     addToCart: null,
//     removeCart: null,

//     addToCart: (item) => {
//         set((state) => ({
//             cart: [...state.cart, { ...item, count: 0 }],
//             count: state.count + 1
//         }));
//     },
//     removeCart: (id) => {
//         const cartList = get().cart;
//         const updatedCart = cartList?.filter((cart) => cart?.id !== id);
//         set((state) => ({
//             cart: updatedCart,
//             count: state.count - 1,
//         }));
//     },
//     addItem: (id) => {
//         const cartList = get().cart;
//         const updatedCart = cartList?.map((cart) => {
//             if (cart.id === id) {
//                 return {
//                     ...cart,
//                     count: cart.count + 1,
//                 };
//             } else {
//                 return cart;
//             }
//         });
//         set((state) => ({
//             cart: updatedCart,
//         }));
//     }

// })


// const useCartStore = create(cartStore);

// export default persist(useCartStore);


import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            count: 0,
            addToCart: null,
            removeCart: null,

            addToCart: (item) => {
                set((state) => ({
                    cart: [...state.cart, { ...item, count: 0 }],
                    count: state.count + 1
                }));
            },
            removeCart: (id) => {
                const cartList = get().cart;
                const updatedCart = cartList?.filter((cart) => cart?.id !== id);
                set((state) => ({
                    cart: updatedCart,
                    count: state.count - 1,
                }));
            },
            addItem: (id) => {
                const cartList = get().cart;
                const updatedCart = cartList?.map((cart) => {
                    if (cart.id === id) {
                        return {
                            ...cart,
                            count: cart.count + 1,
                        };
                    } else {
                        return cart;
                    }
                });
                set((state) => ({
                    cart: updatedCart,
                }));
            }

        }),
        {
            name: 'DukanCart', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)
