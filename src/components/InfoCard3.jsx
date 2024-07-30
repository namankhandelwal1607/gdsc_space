import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
  export default function InfoCard3({ title, description }) {
    return (
      <Card className="mt-6">
        <CardBody>
          <Typography
            variant="h1"
            color="white"
            className="mb-2 font-bold text-4xl truncate overflow-hidden whitespace-nowrap font-poppins" 
          >
            {title}
          </Typography>
          <Typography color="white" className="font-poppins">
            {description}
          </Typography>
        </CardBody>
      </Card>
    );
  }
  