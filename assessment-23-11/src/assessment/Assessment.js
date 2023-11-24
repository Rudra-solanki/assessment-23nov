import React, { useState, useEffect } from 'react'

let MEDICINE_DATA_FOR_UPDATE =
    [
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2881,
            "medicine_taken": false,
            "created_at": "2023-11-20T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
       
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2883,
            "medicine_taken": false,
            "created_at": "2023-11-22T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2886,
            "medicine_taken": false,
            "created_at": "2023-11-28T18:30:00.000Z",
            "slot_time": "09:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2890,
            "medicine_taken": false,
            "created_at": "2023-11-28T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2887,
            "medicine_taken": false,
            "created_at": "2023-11-29T18:30:00.000Z",
            "slot_time": "09:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2891,
            "medicine_taken": false,
            "created_at": "2023-11-29T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2884,
            "medicine_taken": false,
            "created_at": "2023-12-18T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2888,
            "medicine_taken": false,
            "created_at": "2023-12-18T18:30:00.000Z",
            "slot_time": "09:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2892,
            "medicine_taken": false,
            "created_at": "2023-12-18T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2885,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2889,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "09:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2893,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        }, {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2882,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "06:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
    ]


const DAYS_ARRAY = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const MONTH_ARRAY = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];

function Assessment() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [medicineData, setMedicineData] = useState([]);

useEffect(() => {
    const dataManageDatewise = {};

    MEDICINE_DATA_FOR_UPDATE.sort((a,b)=>new Date(a.created_at) - new Date(b.created_at)).forEach((medicineObj) => {
        const dateKey = new Date(medicineObj.created_at).toDateString();
        const slotTime = medicineObj.slot_time;

        if (!dataManageDatewise[dateKey]) {
            dataManageDatewise[dateKey] = {};
        }

        if (dataManageDatewise[dateKey][slotTime]) {
            dataManageDatewise[dateKey][slotTime].push(medicineObj);
        } else {
            dataManageDatewise[dateKey][slotTime] = [medicineObj];
        }
    });

    setMedicineData(dataManageDatewise);
console.log(dataManageDatewise)

    const todayDateKey = new Date().toDateString();
    setSelectedDate(todayDateKey);
}, []);


    function handleToggleClick(date) {
        setSelectedDate(date);
    }

    function timeEventFinder(timeOn12Hour) {
        let time;
         if(timeOn12Hour.includes('pm')) {
            let a = timeOn12Hour.split(':')
            a[0] = Number(a[0]) + 12
            time = a.join(':').split(' ')[0]
        } else{
            time = timeOn12Hour.split(' ')[0]
        }
        // console.log(time)
        // console.log(typeof time)

        if (time >= '06:00' && time < '13:00') {
            return 'Good Morning ☀️';
        } else if (time >= '13:00' && time < '17:00') {
            return 'Good noon 🕛';
        } else if (time >= '17:00' && time < '20:00') {
            return 'Good evening 🌆';
        } else if (time >= '20:00' || time < '06:00') {
            return 'Good night 🌙';
        }
    }
    
    function isExpired(date,slot_time) {
        // console.log(date)
        // console.log()
        let slot_time_array = slot_time && Object.values(slot_time).flat().map(item=>item.slot_time)
        let new_format_time = []

        slot_time_array && slot_time_array.forEach(tm => {
            if(tm.includes('pm')) {
                let a = tm.split(':')
                a[0] = Number(a[0]) + 12
                new_format_time.push(a.join(':').split(' ')[0])
            } else{
                new_format_time.push(tm.split(' ')[0])
            }
        })

        // console.log(new Date(date),new Date())
        if(new Date(date).toDateString() == new Date().toDateString()){
            let current_time =`${String(new Date().getHours()).padStart(2,'0')}:${String(new Date().getMinutes()).padStart(2,'0')}`
            // console.log(current_time)
            let anyMissing=  new_format_time.some(time => time > current_time)
            // console.log(new_format_time, current_time, anyMissing)
            // console.log('if')
            return anyMissing
        }else {
            // console.log('else')
            return new Date(date) < new Date()
        }
    }
    

    return (
        <div>
          <div className='flex flex-wrap w-[800px]'>
            {Object.keys(medicineData).map((date, index) => (
              <DayWiseToggleBtn
                selectedDate={selectedDate}
                onToggleClick={handleToggleClick}
                date={date}
                key={index}
                expired={isExpired(date,medicineData[selectedDate])}
              />
            ))}
          </div>
          {selectedDate && medicineData[selectedDate] && (
            <div className=''>
              {Object.keys(medicineData[selectedDate]).map((slotTime) => (
                <div className='m-2 rounded px-6 py-2 w-[650px] flex bg-green-700' key={slotTime}>
                  <div className='w-[625px]'>
                    <div className='flex justify-between'>
                      <h1>{timeEventFinder(slotTime)}</h1>
                      <p>{slotTime}</p>
                    </div>
                    <h1 className='text-xl text-start'>
                      {medicineData[selectedDate][slotTime].map((medicine, index) => (
                        <div key={index}>{medicine.medicine_name}</div>
                      ))}
                    </h1>
                  </div>
                  {new Date(selectedDate) < new Date() && <div className='bg-red-800 rounded ml-1 w-[30px] h-[50px] '>^</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      );
}

export default Assessment;

function DayWiseToggleBtn({ date, onToggleClick, selectedDate, expired }) {
    let medicine_date = new Date(date)
    return (
        <div
            onClick={() => onToggleClick(date)}
            className={`m-2 ${selectedDate === date ? 'bg-green-500' : 'text-green-700 bg-white'} cursor-pointer rounded p-1 border bg flex flex-col  gap-1 px-3`}
        >
            <h1>{medicine_date.getDate()}-{MONTH_ARRAY[medicine_date.getMonth()]}</h1>
            <span>{DAYS_ARRAY[new Date(date).getDay()]}</span>
            <div className={`rounded w-[10px] h-[10px] ${expired ? 'bg-red-600' : 'bg-green-600'} mx-auto`}></div>
        </div>
    );
}