import React, { useMemo } from "react";

//import components
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from '../../components/Common/TableContainer';

function Tables() {
    const columns = useMemo(
        () => [
            {
                header: 'MO',
                accessorKey: 'mo',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'CStatus',
                accessorKey: 'cstatus',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'CTeam',
                accessorKey: 'cteam',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'FStatus',
                accessorKey: 'fstatus',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'FTeam',
                accessorKey: 'fteam',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'EndDate',
                accessorKey: 'endDate',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Comment',
                accessorKey: 'comment',
                enableColumnFilter: false,
                enableSorting: true,
            },
        ],
        []
    );

    const data = [
        {
            mo: "M001",
            cstatus: "Stitching",
            cteam: "John",
            fstatus: "Painting",
            fteam: "Samuel",
            endDate: "2010/11/14",
            comment: "Inprogess"
        },
        {
            mo: "M002",
            cstatus: "Stitching",
            cteam: "John",
            fstatus: "Painting",
            fteam: "Samuel",
            endDate: "2010/11/14",
            comment: "Inprogess"
        },
        {
            mo: "M003",
            cstatus: "Stitching",
            cteam: "John",
            fstatus: "Painting",
            fteam: "Samuel",
            endDate: "2010/11/14",
            comment: "Inprogess"
        },
        {
            mo: "M004",
            cstatus: "Stitching",
            cteam: "John",
            fstatus: "Painting",
            fteam: "Samuel",
            endDate: "2010/11/14",
            comment: "Inprogess"
        },
        {
            mo: "M005",
            cstatus: "Stitching",
            cteam: "John",
            fstatus: "Painting",
            fteam: "Samuel",
            endDate: "2010/11/14",
            comment: "Inprogess"
        },
        {
            mo: "M006",
            cstatus: "Stitching",
            cteam: "John",
            fstatus: "Painting",
            fteam: "Samuel",
            endDate: "2010/11/14",
            comment: "Inprogess"
        },
        {
            mo: "M007",
            cstatus: "Stitching",
            cteam: "John",
            fstatus: "Painting",
            fteam: "Samuel",
            endDate: "2010/11/14",
            comment: "Inprogess"
        },
        {
            mo: "M008",
            cstatus: "Stitching",
            cteam: "John",
            fstatus: "Painting",
            fteam: "Samuel",
            endDate: "2010/11/14",
            comment: "Inprogess"
        },
    ];
    return (
        <div className="page-content">
            <div className="container-fluid">
                <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />
                <TableContainer
                    columns={columns}
                    data={data || []}
                    isGlobalFilter={true}
                    isPagination={true}
                    SearchPlaceholder="27 records..."
                    pagination="pagination"
                    paginationWrapper='dataTables_paginate paging_simple_numbers'
                    tableClass="table-bordered table-nowrap dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
                />
            </div>
        </div>
    );
}


export default Tables;