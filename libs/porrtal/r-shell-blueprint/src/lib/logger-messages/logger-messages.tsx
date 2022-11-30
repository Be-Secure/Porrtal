import { ViewComponentProps, LoggerEntry } from '@porrtal/r-api';
import { useLoggerState } from '@porrtal/r-shell';
import styles from './logger-messages.module.scss';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { ITooltipParams } from 'ag-grid-community';
import { useMemo, useState } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

const MessageDetailTooltip = (props: ITooltipParams<LoggerEntry>) => {
  const data = useMemo(() => {
    if (props.rowIndex !== undefined) {
      return props.api.getDisplayedRowAtIndex(props.rowIndex)?.data;
    } else {
      return undefined;
    }
  }, [props.api, props.rowIndex]);

  return (
    <div style={{ backgroundColor: 'gainsboro', padding: '10px' }}>
      <p>
        <span>{data?.messageDetail}</span>
      </p>
    </div>
  );
};

export function LoggerMessages(props: ViewComponentProps) {
  const loggerState = useLoggerState();
  const [columnDefs, setColumnDefs] = useState<ColDef<LoggerEntry>[]>([
    { field: 'message' },
    {
      field: 'messageDetail',
      tooltipField: 'messageDetail',
      tooltipComponent: MessageDetailTooltip,
    },
    { field: 'system' },
    { field: 'subsystem' },
    { field: 'component' },
    { field: 'severity' },
    { field: 'consumer' },
    { field: 'isRead' },
    { field: 'user' },
  ]);
  const [defaultColumnDef, setDefaultColumnDef] = useState<ColDef<LoggerEntry>>(
    {
      sortable: true,
      filter: true,
      resizable: true,
    }
  );
  return (
    <div className={styles['container']}>
      <span>Logger Entries:</span>
      <div className={`${styles['grid-container']} ag-theme-balham`}>
        <AgGridReact<LoggerEntry>
          rowData={loggerState.entries}
          columnDefs={columnDefs}
          defaultColDef={defaultColumnDef}
          tooltipShowDelay={500}
          tooltipHideDelay={20000}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default LoggerMessages;