import * as React from "react";
import * as classnames from "classnames";
import "./styles.scss";

export default function Modal(props) {
    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    };

    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit();
        }
    };

    return(
        <div className={classnames("modal", {in: props.active})} role="dialog">
            <div
                className={classnames("modal-dialog", {
                    "modal-lg": props.large,
                    "modal-sm": props.small,
                    "modal-x-lg": props.xLarge,
                })} role="document">
                <div className="modal-content">
                    {props.title &&
                    <div className="modal-header">
                        <h4 className="modal-title">{props.title}</h4>
                        {props.cancellable &&
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        }
                    </div>
                    }
                    <div className="modal-body" style={props.bodyStyle}>
                        {props.children}
                    </div>
                    {(props.onSubmit || props.cancellable) &&
                    <div className="modal-footer">
                        {props.cancellable &&
                        <button
                            type="button"
                            className="btn btn-default"
                            data-dismiss="modal"
                            onClick={handleClose}>
                            {props.cancelTitle || "Close"}
                        </button>
                        }
                        {props.onSubmit &&
                        <button
                            type="button"
                            className="btn btn-primary"
                            disabled={props.disableSubmit}
                            onClick={handleSubmit}>
                            {props.submitTitle || "Submit"}
                        </button>
                        }
                        <div>
                            {props.error &&
                            <div className="alert alert-danger" role="alert">
                                <strong>Error!</strong> {props.error}
                            </div>
                            }
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
