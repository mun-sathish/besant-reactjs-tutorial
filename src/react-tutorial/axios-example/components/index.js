import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function Tiles({ employeeData }) {
    return (
        <div>
            <Card
                hoverable
                style={{ width: 240, margin: "10px" }}
                cover={
                    <img
                        width="200"
                        height="300"
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                }
            >
                <Meta
                    title={employeeData.employee_name}
                    description={`Age: ${employeeData.employee_age} - Salary: ${employeeData.employee_salary}`}
                />
            </Card>
        </div>
    );
}
