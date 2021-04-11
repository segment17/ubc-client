import React, { useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";
import { useTable, usePagination } from "react-table";

function StaticTable({ columns, data, tableInfo, forceUpdateTable }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 20 },
        },
        usePagination
    );

    const pageIndexRef = React.useRef();

    useEffect(() => { }, [forceUpdateTable]);

    // Render the UI for your table
    return (
        <>
            <Table
                forceUpdateTable={forceUpdateTable}
                striped
                bordered
                hover
                responsive
                size="md"
                {...getTableProps()}
            >
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={"header-group"}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} key={column.id}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.length > 0 || pageIndex > 0 ? (
                        page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} key={row.id} className="rt-tr ">
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                key={
                                                    cell.column.Header.props
                                                        ? cell.column.Header.props.id
                                                        : cell.column.Header + cell.row.id
                                                }
                                                className="rt-td align-top "
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="10000">
                                <p className="warning-text no-content-table">
                                    İçerik bulunamadı.
								</p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            {typeof tableInfo !== undefined ? tableInfo : null}
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
            {data.length > 20 ? (
                <Container fluid>
                    <Row>
                        <Col lg={4}></Col>
                        <Col lg={4} className="d-flex justify-content-center">
                            <button
                                className="ui icon button"
                                onClick={() => {
                                    gotoPage(0);
                                    pageIndexRef.current.value = 0;
                                }}
                                disabled={!canPreviousPage}
                            >
                                <i className="angle double left icon"></i>
                            </button>{" "}
                            <button
                                className="ui icon button"
                                onClick={() => {
                                    previousPage();
                                    pageIndexRef.current.value--;
                                }}
                                disabled={!canPreviousPage}
                            >
                                <i className="angle left icon"></i>
                            </button>{" "}
                            <div className="ui icon input">
                                <DebounceInput
                                    className="text-center pagination-def"
                                    type="number"
                                    ref={pageIndexRef}
                                    debounceTimeout={500}
                                    value={pageIndex + 1}
                                    onBlur={(e) => {
                                        e.target.value = pageIndex + 1;
                                    }}
                                    onChange={(e) => {
                                        // const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                        if (e.target.value === "" || /^\d+$/.test(e.target.value))
                                            gotoPage(
                                                e.target.value ? Number(e.target.value) - 1 : pageIndex
                                            );
                                        else {
                                            e.target.value = pageIndex + 1;
                                        }
                                    }}
                                />
                                <strong className="pagination-total-text">
                                    {` / ${pageOptions.length}`}
                                </strong>{" "}
                            </div>
                            <button
                                className="ui icon button"
                                onClick={() => {
                                    nextPage();
                                    pageIndexRef.current.value++;
                                }}
                                disabled={!canNextPage}
                            >
                                <i className="angle right icon"></i>
                            </button>{" "}
                            <button
                                className="ui icon button"
                                onClick={() => {
                                    gotoPage(pageCount - 1);
                                    pageIndexRef.current.value = pageCount;
                                }}
                                disabled={!canNextPage}
                            >
                                <i className="angle double right icon"></i>
                            </button>
                        </Col>
                        <Col lg={4}></Col>
                    </Row>
                    <br />
                </Container>
            ) : null}
        </>
    );
}

export default StaticTable;
