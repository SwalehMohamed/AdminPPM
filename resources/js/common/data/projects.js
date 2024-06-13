

const projects = [
  {
    id: 1,
    mo: 'M001',
    so: 'S001',
    pname: 'Aunings',
    cstatus: [
      { id: 6, name: 'Stitching'},
      { id: 5, name: 'PVC Welding'}
    ],
    cteam: 'John, Mark, Ali',
    fstatus: [
      { id: 8, name: 'Painting'},
      { id: 4, name: 'Welding'}
    ],
    fteam: 'Sam, Steve',
    startdate: '01/06/2024',
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
  {
    id: 2,
    mo: 'M002',
    so: 'S002',
    pname: 'Canopy',
    cstatus: [
      { id: 6, name: 'Stitching'}
    ],
    cteam: 'John',
    fstatus: [
      { id: 4, name: 'Welding'}
    ],
    fteam: 'Steve',
    startdate: '01/06/2024',
    enddate: '21/06/2024',
    comment: 'Delay'
  },
  {
    id: 3,
    mo: 'M003',
    so: 'S003',
    pname: 'Car Shades',
    cstatus: [
      { id: 5, name: 'PVC Welding'}
    ],
    cteam: 'Ali',
    fstatus: [
      { id: 4, name: 'Welding'}
    ],
    fteam: 'Sam',
    startdate: '01/06/2024',
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
  {
    id: 4,
    mo: 'M004',
    so: 'S004',
    pname: 'Shade Sails',
    cstatus: [
      { id: 7, name: 'Branding'},
    ],
    cteam: 'Samantha',
    fstatus: [
      { id: 8, name: 'Painting'},
      { id: 4, name: 'Welding'}
    ],
    fteam: 'Sam, Steve',
    startdate: '01/06/2024',
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
  {
    id: 5,
    mo: 'M005',
    so: 'S005',
    pname: 'Tents',
    cstatus: [
      { id: 2, name: 'Store'},
    ],
    cteam: 'Samantha',
    fstatus: [
      { id: 2, name: 'Cutting'},
    ],
    fteam: 'Guy',
    startdate: '01/06/2024',
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
  {
    id: 6,
    mo: 'M004',
    so: 'S004',
    pname: 'Windbreakers',
    cstatus: [
      { id: 2, name: 'Store'}
    ],
    cteam: 'Samantha',
    fstatus: [
      { id: 1, name: 'Not Applicable'}
    ],
    fteam: 'None',
    startdate: '01/06/2024',
    enddate: '21/06/2024',
    comment: 'Delay'
  },
  {
    id: 7,
    mo: 'M007',
    so: 'S007',
    pname: 'Tarpaulain Covers',
    cstatus: [
      { id: 3, name: 'Approval'},
    ],
    cteam: 'Samantha',
    fstatus: [
      { id: 1, name: 'Not Applicable'}
    ],
    fteam: 'none',
    startdate: '01/06/2024',
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
  {
    id: 8,
    mo: 'M008',
    so: 'S008',
    pname: 'Garden Set',
    cstatus: [
      { id: 3, name: 'Approval'},
    ],
    cteam: 'Samantha',
    fstatus: [
      { id: 2, name: 'Cutting'}
    ],
    fteam: 'Sam, Steve',
    startdate: '01/06/2024',
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
  {
    id: 9,
    mo: 'M009',
    so: 'S009',
    pname: 'Tarpaulain Covers',
    cstatus: [
      { id: 3, name: 'Approval'},
      {id:2, name:'Store'}
    ],
    cteam: 'Samantha',
    fstatus: [
      { id: 1, name: 'Not Applicable'}
    ],
    fteam: 'none',
    startdate: '01/06/2024',
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
];

const projectListData = [
  {
    id: 1,
    mo: 'M001',
    cstatus: [
      { id: 6, name: 'Stitching'},
      { id: 5, name: 'PVC Welding'}
    ],
    fstatus: [
      { id: 8, name: 'Painting'},
      { id: 4, name: 'Welding'}
    ],
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
  {
    id: 2,
    mo: 'M002',
    cstatus: [
      { id: 6, name: 'Stitching'}
    ],
    fstatus: [
      { id: 4, name: 'Welding'}
    ],
    enddate: '21/06/2024',
    comment: 'Delay'
  },
  {
    id: 3,
    mo: 'M003',
    cstatus: [
      { id: 5, name: 'PVC Welding'}
    ],
    fstatus: [
      { id: 4, name: 'Welding'}
    ],
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
  {
    id: 4,
    mo: 'M004',
    cstatus: [
      { id: 7, name: 'Branding'},
    ],
    fstatus: [
      { id: 8, name: 'Painting'},
      { id: 4, name: 'Welding'}
    ],
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
  {
    id: 5,
    mo: 'M005',
    cstatus: [
      { id: 2, name: 'Store'},
    ],
    fstatus: [
      { id: 2, name: 'Cutting'},
    ],
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
  {
    id: 6,
    mo: 'M004',
    cstatus: [
      { id: 2, name: 'Store'}
    ],
    fstatus: [
      { id: 1, name: 'Not Applicable'}
    ],
    enddate: '21/06/2024',
    comment: 'Delay'
  },
  {
    id: 7,
    mo: 'M007',
    cstatus: [
      { id: 3, name: 'Approval'},
    ],
    fstatus: [
      { id: 1, name: 'Not Applicable'}
    ],
    enddate: '21/06/2024',
    comment: 'Inprogress'
  },
];


const cstatus = [
  {
    id: 1,
    name: "Not Applicable",
  },
  {
    id: 2,
    name: "Store",
  },
  {
    id: 3,
    name: "Approval",
  },
  {
    id: 4,
    name: "Cutting",
  },
  {
    id: 5,
    name: "PVC Welding",
  },
  {
    id: 6,
    name: "Stitching",
  },
  {
    id: 7,
    name: "Branding",
  },
  {
    id: 8,
    name: "Complete",
  }
];

const fstatus = [
  {
    id: 1,
    name: "Not Applicable",
  },
  {
    id: 2,
    name: "Cutting",
  },
  {
    id: 3,
    name: "Setting",
  },
  {
    id: 4,
    name: "Welding",
  },
  {
    id: 5,
    name: "Grinding",
  },
  {
    id: 6,
    name: "Filler",
  },
  {
    id: 7,
    name: "Sanding",
  },
  {
    id: 8,
    name: "Painting",
  },
  {
    id: 9,
    name: "Complete",
  }
];

export { projects, projectListData,cstatus,fstatus };
