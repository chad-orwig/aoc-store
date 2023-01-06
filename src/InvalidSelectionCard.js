import React from 'react';
import { Accordion, Table} from 'react-bootstrap';
import { sumByRequiredCost } from './ControlPanel';
import { year } from './database';

const optionToTableRow = (rowIndex) => (option,index) => {
    return (
        <tr key={`${rowIndex}-${index + 1}`}>
            <td colSpan="4">{option.name} - {option.selections.join(',')}</td>
        </tr>
    );
}

function selectionToTableRows(selection, index) {
    const firstOption = selection?.options?.[0];
    const firstOptionText = firstOption ? `${firstOption.name} - ${firstOption.selections.join(',')}` : '-';
    const cost = firstOption?.upcharge ? `${selection.cost * selection.qty} + ${selection.upcharge}` : `${selection.cost * selection.qty}`;
    const remainingOptions = selection?.options?.slice(1) ?? [];
    const mainRow = (
        <tr key={`${index}-0`}>
            <td>{selection.name}</td>
            <td>{selection.qty}</td>
            <td>{firstOptionText}</td>
            <td>{cost}</td>
        </tr>
    );

    const remainingOptionRows = remainingOptions.map(optionToTableRow(index));

    return [mainRow, ...remainingOptionRows]
}

export default function InvalidSelectionCard({data, collapseKey}) {
    return (
        <Accordion.Item className="hide-print" bg='danger' text="white" eventKey={collapseKey.toString()}>
           <Accordion.Header as={"div"}>
                {data.name} - {data.stars}⭐
            </Accordion.Header>
            <Accordion.Body>
                <Table striped variant="danger" size="sm">
                    <thead><tr><th>Selection</th><th>Qty</th><th>Option</th><th>Cost</th></tr></thead>
                    <tbody>
                        {data?.selection?.[year]?.flatMap(selectionToTableRows) ??[]}
                        <tr><th colSpan="3"> </th><th>{data?.selection?.[year] ? sumByRequiredCost(data?.selection?.[year]) : ' '}</th></tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>
    );
}