 
export default function handler(req, res) {
    res.status(200).json([
      {
        name: "Motor A",
        specifications: "Specification details here...",
        capacity: "1000 L/h",
        onOffState: "On",
        hoursRun: "1200 hours",
        image: "https://i.ibb.co/Cnwd4q6/image-01.jpg",
      },
      {
        name: "Motor B",
        specifications: "Specification details here...",
        capacity: "1500 L/h",
        onOffState: "Off",
        hoursRun: "800 hours",
        image: "https://i.ibb.co/Y23YC07/image-02.jpg",
      },
      {
        name: "Motor C",
        specifications: "Specification details here...",
        capacity: "2000 L/h",
        onOffState: "On",
        hoursRun: "1500 hours",
        image: "https://i.ibb.co/7jdcnwn/image-03.jpg",
      },
    ]);
  }
  