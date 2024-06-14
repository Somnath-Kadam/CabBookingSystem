import { LightningElement } from 'lwc';

export default class Map extends LightningElement {
    mapmarkers = [
        {
            location: {
                Street: 'M G Road',
                City: 'Pune',
                State: 'Maharashtra'
            },
            title: 'Pune Pick up point',
            description: 'Premium mycab intercity: Pune Location'
        },
        {
            location: {
                Street: 'Shivaji Park',
                City: 'Mumbai',
                State: 'Maharashtra'
            },
            title: 'Mumbai Pick up point',
            description: 'Premium mycab intercity: Mumbai Location'
        },
        {
            location: {
                Street: 'Pathardi Phata',
                City: 'Nashik',
                State: 'Maharashtra'
            },
            title: 'Nashik Pick up point',
            description: 'Premium mycab intercity: Nashik Location'
        },
        {
            location: {
                Street: 'Indiraghandhi Medical College',
                City: 'Nagpur',
                State: 'Maharashtra'
            },
            title: 'Nagpur Pick up point',
            description: 'Premium mycab intercity: Nagpur Location'
        }
    ];

    markersTitle = 'Cordinates For Centering';
    center = {
        location: { Latitude: '19.8296893', Longitude: '75.88003049999998' }
    };
}
