import { ViewComponentProps, LoggerEntry } from '@porrtal/api';
import { useLoggerState } from '@porrtal/shell';
import styles from './logger-messages.module.scss';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { useState } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

export function LoggerMessages(props: ViewComponentProps) {
  const loggerState = useLoggerState();
  const [columnDefs, setColumnDefs] = useState<ColDef<LoggerEntry>[]>([
    { field: 'message',  },
    { field: 'system' },
    { field: 'subsystem' },
    { field: 'component' },
    { field: 'severity' },
    { field: 'consumer' },
    { field: 'messageDetail' },
    { field: 'isRead',  },
    { field: 'user',  },
  ]);
  console.log('logger messages', loggerState);
  return (
    <div className={styles['container']}>
      <span>Logger Entries:</span>
      <div className={`${styles['grid-container']} ag-theme-material`}>
        <AgGridReact<LoggerEntry>
          rowData={loggerState.entries}
          columnDefs={columnDefs}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default LoggerMessages;
