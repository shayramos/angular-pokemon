export interface ICardDetail {
    count: number;
    data: ICardData;
    page: number;
    pageSize: number;
    totalCount: number;
}
export interface ICard {
    count: number;
    data: Array<ICardData>;
    page: number;
    pageSize: number;
    totalCount: number;
}

export interface ICardData {
    id: string;
    name: string;
    types: Array<string>;
    images: {
        small: string,
        large: string,
    },
    attacks: [
        {
            name: string,
            convertedEnergyCost: number,
            damage: number,
            text: string
        }
    ],
    weaknesses: [
        {
          type: string,
          value: string
        }
    ],
}