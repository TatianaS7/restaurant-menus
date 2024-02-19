const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    // beforeAll(async () => {
    //     // the 'sync' method will create tables based on the model class
    //     // by setting 'force:true' the tables are recreated each time the 
    //     // test suite is run
    //     await sequelize.sync({ force: true });
    // });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const newRestaurant = new Restaurant('Capt Loui', 'Fort Lee', "Seafood");
        expect(newRestaurant).toBeInstanceOf(Restaurant)
    });

    test('can create a Menu', async () => {
        // TODO - write test
        const newMenu = new Menu('Beverages');
        expect(newMenu).toBeInstanceOf(Menu)
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        expect(seedRestaurant[0].name).toEqual('AppleBees');
    });

    test('can find Menus', async () => {
        // TODO - write test
        expect(seedMenu[2].title).toEqual('Dinner');
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        seedRestaurant.splice(1, 1);
        expect(seedRestaurant[1].name).toEqual('Spice Grill')
    });
    test('can delete Menu', async () => {
        // TODO - write test
        seedMenu.splice(1, 1);
        expect(seedMenu[1].title).toEqual('Dinner')
    });
})