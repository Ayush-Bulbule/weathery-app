interface IWeather {
    main: {
        temp: number;
    }
    weather: [{
        main: string;
    }]
    dt_txt: string;
}
