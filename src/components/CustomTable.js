import React from "react";
import Pagination from "@mui/material/Pagination/Pagination";
import Table from "@mui/material/Table/Table";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import TableBody from "@mui/material/TableBody/TableBody";
import TableHead from "@mui/material/TableHead/TableHead";
import Collapse from "@mui/material/Collapse/Collapse";
import Edit from "./buttons/Edit";
import Process from "./buttons/Process";
import Reject from "./buttons/Reject";
import Detail from "./buttons/Detail";
import Delete from "./buttons/Delete";
import Order from "./buttons/Order";
import Unlock from "./buttons/Unlock";
import Secret from "./buttons/Secret";
import IconBtn from "./buttons/IconBtn";
import Recharge from "./buttons/Recharge";
import CancelOrRefund from "./buttons/CancelOrRefund";
import CheckBtn from "./buttons/CheckBtn";
import Varient from "./buttons/Varient";
import CustomImage from "./CustomImage";
import {buttonType} from "../config/config";

export default function CustomTable(props) {
    const [data, setData] = React.useState({
        head: Object.keys(props.type),
        body: Object.values(props.type),
        data: props.data,

        openCollapse: [],

        searchText: "",
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: props.data.length,
        sortAsc: true,
        sortKey: props.data.length > 0 ? Object.keys(props.data[0])[0] : ""
    });
    const itemsPerPageList = [10, 20, 30, 40, 50];

    const setItemsPerPage = (event) => {
        data.itemsPerPage = event.target.value;
    };

    const showSearchField = () => {
        if (props.searchField) {
            return (
                <div className="row mb-3">
                    <div className="col-md-4">
                        Show <select className="items-per-page" value={data.itemsPerPage}
                                     onChange={setItemsPerPage}>
                        {itemsPerPageList.map(val =>
                            <option key={val} value={val}>{val}</option>)}
                    </select> entires
                    </div>
                    <div className="col-sm-8">
                        <div className="d-flex justify-content-end">
                            <div className="dataTables_filter"><label>Search:<input
                                type="search" className="form-control form-control-sm"
                                placeholder="" aria-controls="datatableDefault"
                                onChange={(event) => setSearchText(event.target.value)}/></label></div>
                            <div className="dt-buttons btn-group flex-wrap">
                                <button className="btn btn-secondary buttons-print btn-default"
                                        tabIndex="0" aria-controls="datatableDefault" type="button">
                                    <span>Print</span></button>
                                <button
                                    className="btn btn-secondary buttons-csv buttons-html5 btn-default"
                                    tabIndex="0" aria-controls="datatableDefault" type="button">
                                    <span>CSV</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    };

    /**
     *show header of table by array of header name
     */
    const showHeader = () => {
        let keys = Object.keys(props.typeEx);
        let keysBtn = Object.keys(props.buttonEx);
        return (
            <React.Fragment>
                <TableRow className="font-weight-bold">
                    {keys.length > 0 || keysBtn.length > 0 ? (
                        <TableCell className="text-right">
                            #
                        </TableCell>) : ""}
                    <TableCell className="text-right">
                        No
                    </TableCell>
                    {data.head.map((item, indexHeader) =>
                        <TableCell key={"head_" + indexHeader} className="text-center"
                                   onMouseDown={() => sortItems(props.type[item])}>
                            {item}
                        </TableCell>
                    )}

                    {Object.keys(props.button).map((item, indexHeader) =>
                        <TableCell key={"head_action" + indexHeader} className="text-center">
                            {item}
                        </TableCell>
                    )}
                </TableRow>
            </React.Fragment>

        )
    };

    /**
     * show tbody by data from db
     */
    const showBody = () => {
        if (data.data.length !== 0) {
            let keysEx = Object.keys(props.typeEx);
            let keysBtn = Object.keys(props.buttonEx);
            return (
                data.data.filter(item => searchData(item)).slice((data.currentPage - 1) * data.itemsPerPage, data.currentPage * data.itemsPerPage).sort((a, b) => sortByKeyAndType(a, b)).map((eachData, eachDataIndex) =>
                    <React.Fragment key={"body_" + eachDataIndex + "fragment"}>
                        <TableRow className="text-wrap">
                            {keysEx.length > 0 || keysBtn.length > 0 ? (
                                <TableCell className="text-right">
                                <span className="text-gray"
                                      aria-label="expand row"
                                      onClick={() => changeOpenState(eachDataIndex, !data.openCollapse[eachDataIndex])}
                                >
                                    {data.openCollapse[eachDataIndex] ? <i className="fa fa-minus"/> :
                                        <i className="fa fa-plus"/>}
                                </span>
                                </TableCell>
                            ) : ""}

                            <TableCell className="text-right">
                                {(data.currentPage - 1) * data.itemsPerPage + eachDataIndex + 1}
                            </TableCell>
                            {data.head.map((keyFromHead, subIndex) =>
                                showCell(eachDataIndex, keyFromHead, eachData[props.type[keyFromHead]])
                            )}
                            {Object.keys(props.button).map((key, indexAction) =>
                                <TableCell key={"body_action" + indexAction} className="text-center text-nowrap"
                                           aria-controls="datatableDefault"
                                           rowSpan="1"
                                           colSpan="1"
                                           aria-label="Role Name: activate to sort column ascending">
                                    {showButton(key, eachData)}
                                </TableCell>
                            )}

                        </TableRow>
                        {showEx(eachDataIndex, eachData)}
                    </React.Fragment>
                )
            )
        } else {
            return (
                <TableRow>
                    <TableCell className="text-center"
                               colSpan={data.head.length + (Object.keys(props.typeEx).length > 0 ? 1 : 0) + Object.keys(props.button).length + 1}>
                        No data found</TableCell>
                </TableRow>
            )
        }
    };

    /**
     * show each cell of trow
     * index: index of row
     * key: index of col above row
     * val: data to show on td
     */
    const showCell = (index, key, val) => {
        let cellKey = index + "_" + key;
        let css = "";
        let style = props.style;
        let keys = Object.keys(style);
        for (let i = 0; i < keys.length; i++) {
            if (key.toString().toLowerCase() === keys[i].toString().toLowerCase()) {
                let switchStyleKeys = Object.keys(style[keys[i]]);
                let switchStyleValues = Object.values(style[keys[i]]);
                for (let j = 0; j < switchStyleKeys.length; j++) {
                    if (val.toString().toLowerCase() === switchStyleKeys[j].toString().toLowerCase()) {
                        css += switchStyleValues[j];
                    }
                }
            }
        }
        let image = props.image;
        for (let i = 0; i < image.length; i++) {
            if (image[i].toLowerCase() === key.toLowerCase()) {
                return (
                    <TableCell key={cellKey + "_img"} className="text-center align-items-center">
                        <div className={css}>
                            <CustomImage src={val}/>
                        </div>
                    </TableCell>
                )
            }
        }
        return (
            <TableCell key={cellKey} className="text-center">
                <div className={css}>
                    {!css.includes("fa ") ? val : ""}
                </div>
            </TableCell>
        );
    };

    /**
     * show button
     * @param key: key of buttons json
     * @param item: data of row to show this button
     * @returns {*}
     */
    const showButton = (key, item) => {
        return (
            props.button[key].map((val, index) =>
                (
                    subButton(key, val, item)
                )
            )
        );

    };

    const subButton = (key, val, item) => {
        switch (val) {
            case buttonType.edit:
                return (
                    <Edit key={"button_" + key + "_" + val + "_" + item} item={item}/>
                );
            case buttonType.delete:
                return (
                    <Delete key={"button_" + key + "_" + val + "_" + item} item={item}/>
                );
            case buttonType.process:
                return (
                    <Process
                        key={"button_" + key + "_" + val + "_" + item}
                        item={item}
                        processed={item.processed}
                    />
                );
            case buttonType.reject:
                return (
                    <Reject key={"button_" + key + "_" + val + "_" + item} item={item}/>
                );
            case buttonType.detail:
                return (
                    <Detail
                        key={"button_" + key + "_" + val + "_" + item}
                        modalTitle={props.detailTitle}
                        item={item}
                        type={props.detailType}
                        image={props.detailImage}
                    />
                );
            case buttonType.order:
                return (
                    <Order key={"button_" + key + "_" + val + "_" + item} item={item}/>
                );
            case buttonType.varient:
                return (
                    <Varient key={"button_" + key + "_" + val + "_" + item} item={item}/>
                );
            case buttonType.unlock:
                return (
                    <Unlock key={"button_" + key + "_" + val + "_" + item} item={item}/>
                );
            case buttonType.secret:
                return (
                    <Secret key={"button_" + key + "_" + val + "_" + item} item={item}/>
                );
            case buttonType.icon:
                return (
                    <IconBtn key={"button_" + key + "_" + val + "_" + item} item={item}/>
                );
            case buttonType.recharge:
                return (
                    <Recharge key={"button_" + key + "_" + val + "_" + item} item={item}/>
                );
            case buttonType.cancelOrRefund:
                return (
                    <CancelOrRefund key={"button_" + key + "_" + val + "_" + item} item={item}/>
                );
            case buttonType.showOrHide:
                return (
                    <CheckBtn key={"button_" + key + "_" + val + "_" + item} item={item}/>
                );
            default:
        }
    };

    /**
     * show expand data
     * @param index: index of the data to show
     * @param item: data to show
     * @returns {*}
     */
    const showEx = (index, item) => {
        let keys = Object.keys(props.typeEx);
        let keysBtn = Object.keys(props.buttonEx);
        if (keys.length > 0 || keysBtn.length > 0) {
            return (
                <TableRow>
                    <TableCell style={{paddingBottom: 0, paddingTop: 0}}
                               colSpan={data.head.length + (keys.length > 0 || keysBtn.length > 0 ? 1 : 0) + keys.length + 1}>
                        <Collapse in={data.openCollapse[index]} timeout="auto" unmountOnExit>
                            {
                                keys.map((value, i) => (
                                    props.image.map((v) => (
                                        <div className="row border-top pt-2 pb-2"
                                             key={"expand_" + index + "_" + i + "_div"}>
                                            <div className="col-2 font-weight-bold">{value}</div>
                                            {v.toLowerCase() === value.toLowerCase() ? (
                                                <CustomImage src={item[props.typeEx[value]]}/>
                                            ) : (
                                                <div className="col-10">{item[props.typeEx[value]]}</div>
                                            )}
                                        </div>
                                    ))
                                ))
                            }
                            {
                                keysBtn.map((value) => (
                                    <div key={"expand_" + index + "_div" + value} className="border-top pt-2 pb-2">
                                        <span className="font-weight-bold">{value}</span>
                                        <span className="ml-2">
                                            {props.buttonEx[value].map((v, k) => (
                                                subButton(k, v, item)
                                            ))}
                                        </span>
                                    </div>
                                ))
                            }
                        </Collapse>
                    </TableCell>
                </TableRow>
            )
        }
    };


    /**
     * set sort type and key for sort
     * @param item: key for sort
     */
    const sortItems = (item) => {
        data.sortAsc = !data.sortAsc;
        data.sortKey = item;
    };

    /**
     * compare two object and return true or false by key and typw
     * @param a: first obj
     * @param b: second obj
     * @returns {number}: return negative value if swap in asc sort
     */
    const sortByKeyAndType = (a, b) => {
        if (typeof (a[data.sortKey]) === "number" && typeof (b[data.sortKey]) === "number") {
            if (data.sortAsc) {
                return a[data.sortKey] - b[data.sortKey];
            } else {
                return b[data.sortKey] - a[data.sortKey];
            }
        } else {
            let index = 0;
            let s1 = a[data.sortKey].toString();
            let s2 = b[data.sortKey].toString();
            while (true) {
                if (s1.charCodeAt(index) !== s2.charCodeAt(index)) {
                    if (data.sortAsc) {
                        return s1.charCodeAt(index) - s2.charCodeAt(index);
                    } else {
                        return s2.charCodeAt(index) - s1.charCodeAt(index);
                    }
                }
                index++;
            }
        }
    };

    /**
     * whether a item contain some specific string or not
     * @param item: obj to compare
     * @returns {boolean}: return true if contain
     */
    const searchData = (item) => {
        let arrKeys = Object.values(data.body);
        for (let i = 0; i < arrKeys.length; i++) {
            if (item[arrKeys[i]].toString().toLowerCase().includes(data.searchText.toString().toLowerCase())) {
                return true;
            }
        }
        return false;
    };

    /**
     * set search text by input tag
     * @param event: event when change of input value
     */
    const setSearchText = (value) => {
        setData({...data, searchText: value});
        //let countItems = 0;
        let arrKeys = Object.values(data.body);
        for (let i = 0; i < arrKeys.length; i++) {
            for (let j = 0; j < data.data.length; j++) {
                if (data.data[j][arrKeys[i]].toString().toLowerCase().includes(data.searchText.toString().toLowerCase())) {
                    //countItems++;
                }
            }
        }
    };

    /**
     * at expand data field, change open state
     * @param index: index of row
     * @param state: true if open
     */
    const changeOpenState = (index, state) => {
        let openCollapse = data.openCollapse;
        openCollapse[index] = state;
        setData({...data, openCollapse: openCollapse});

    };

    /**
     * at pagination, when click any button, trigger
     * @param event
     * @param value: number of page
     */
    const changePage = (event: React.ChangeEvent<>, value: number) => {
        data.currentPage = value
    };


    return (
        <div className="dataTables_wrapper dt-bootstrap4 no-footer">
            {showSearchField()}
            <div className="dataTables_scroll"
                 style={{overflow: 'auto', width: ' 100%'}}>
                <Table
                    className="table text-nowrap w-100 table-striped dataTable no-footer dtr-inline"
                    role="grid" aria-describedby="datatableDefault_info"
                >
                    <TableHead className="thead-light">
                        {showHeader()}
                    </TableHead>
                    <TableBody>
                        {showBody()}
                    </TableBody>
                </Table>
                <div className="dataTables_info" role="status"
                     aria-live="polite">
                    <span>Showing </span>
                    <span>{(data.currentPage - 1) * data.itemsPerPage + 1}</span>
                    <span> to </span>
                    <span>{(data.currentPage) * data.itemsPerPage > data.totalItems ?
                        data.totalItems : data.currentPage * data.itemsPerPage}</span>
                    <span> of </span>
                    <span>{data.totalItems}</span>
                    <span> entries</span>
                </div>

            </div>
            <div className="text-center mb-3">
                <Pagination className="center-block" style={{display: 'inline-flex'}}
                            count={Math.ceil(data.data.length / data.itemsPerPage)}
                            siblingCount={2}
                            boundaryCount={1}
                            showFirstButton showLastButton variant="outlined" shape="rounded"
                            onChange={changePage}/>
            </div>
        </div>
    )
}
