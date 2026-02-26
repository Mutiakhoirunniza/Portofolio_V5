import React, { useState } from "react"
import { Modal, IconButton, Box, Fade, Backdrop, Zoom, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import { FileText, Download } from "lucide-react"

const Certificate = ({ ImgSertif, PdfLink, SubImages = [] }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const allImages = [ImgSertif, ...SubImages];

	return (
		<Box component="div" sx={{ width: "100%" }}>
			{/* Thumbnail Container */}
			<Box
				className=""
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 2,
					boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
					transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
					"&:hover": {
						transform: "translateY(-5px)",
						boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
						"& .overlay": {
							opacity: 1,
						},
						"& .hover-buttons": {
							transform: "translate(-50%, -50%)",
							opacity: 1,
						},
						"& .certificate-image": {
							filter: "contrast(1.05) brightness(0.7) saturate(1.1)",
						},
					},
				}}>
				{/* Certificate Image with Initial Filter */}
				<Box
					sx={{
						position: "relative",
						"&::before": {
							content: '""',
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: "rgba(0, 0, 0, 0.1)",
							zIndex: 1,
						},
					}}>
					<img
						className="certificate-image"
						src={ImgSertif}
						alt="Certificate"
						style={{
							width: "100%",
							height: "auto",
							display: "block",
							objectFit: "cover",
							filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
							transition: "all 0.3s ease",
						}}
						onClick={handleOpen}
					/>
					{SubImages.length > 0 && (
						<Box
							sx={{
								position: "absolute",
								bottom: 12,
								right: 12,
								bgcolor: "rgba(99, 102, 241, 0.9)",
								color: "white",
								px: 1.5,
								py: 0.5,
								borderRadius: "20px",
								fontSize: "0.75rem",
								fontWeight: 600,
								zIndex: 3,
								boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
							}}
						>
							+{SubImages.length} Pages
						</Box>
					)}
				</Box>

				{/* Hover Overlay */}
				<Box
					className="overlay"
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						opacity: 0,
						transition: "all 0.3s ease",
						backgroundColor: "rgba(0,0,0,0.3)",
						zIndex: 2,
					}}>
					{/* Hover Buttons */}
					<Box
						className="hover-buttons"
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -60%)",
							opacity: 0,
							transition: "all 0.4s ease",
							display: "flex",
							flexDirection: "column",
							gap: 2,
							alignItems: "center",
							width: "100%",
						}}>
						<IconButton
							onClick={handleOpen}
							sx={{
								color: "white",
								bgcolor: "rgba(255,255,255,0.1)",
								backdropFilter: "blur(5px)",
								"&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
								width: 50,
								height: 50
							}}>
							<FullscreenIcon />
						</IconButton>

						{PdfLink && (
							<IconButton
								component="a"
								href={PdfLink}
								target="_blank"
								sx={{
									color: "white",
									bgcolor: "rgba(99, 102, 241, 0.2)",
									backdropFilter: "blur(5px)",
									border: "1px solid rgba(99, 102, 241, 0.3)",
									"&:hover": { bgcolor: "rgba(99, 102, 241, 0.4)" },
									width: 50,
									height: 50
								}}>
								<Download size={20} />
							</IconButton>
						)}

						<Typography
							variant="h6"
							sx={{
								fontWeight: 600,
								fontSize: "0.9rem",
								textShadow: "0 2px 4px rgba(0,0,0,0.3)",
								color: "white"
							}}>
							{SubImages.length > 0 ? `View ${allImages.length} Pages` : (PdfLink ? "View & Download" : "View Certificate")}
						</Typography>
					</Box>
				</Box>
			</Box>

			{/* Modal */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 300,
					sx: {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
						backdropFilter: "blur(5px)",
					},
				}}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					margin: 0,
					padding: 0,
				}}>
				<Box
					sx={{
						position: "relative",
						width: "100%",
						maxWidth: "90vw",
						maxHeight: "95vh",
						outline: "none",
						overflowY: "auto",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 3,
						py: 8,
						px: 2,
						"&::-webkit-scrollbar": {
							width: "8px",
						},
						"&::-webkit-scrollbar-track": {
							background: "rgba(255, 255, 255, 0.05)",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "rgba(99, 102, 241, 0.5)",
							borderRadius: "4px",
						},
					}}>
					{/* Modal Actions */}
					<Box
						sx={{
							position: "fixed",
							right: 24,
							top: 24,
							display: "flex",
							gap: 1,
							zIndex: 10,
						}}>
						{PdfLink && (
							<IconButton
								component="a"
								href={PdfLink}
								target="_blank"
								sx={{
									color: "white",
									bgcolor: "rgba(99, 102, 241, 0.8)",
									"&:hover": { bgcolor: "rgba(99, 102, 241, 0.9)" },
								}}>
								<Download size={20} />
							</IconButton>
						)}
						<IconButton
							onClick={handleClose}
							sx={{
								color: "white",
								bgcolor: "rgba(0,0,0,0.6)",
								"&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
							}}>
							<CloseIcon />
						</IconButton>
					</Box>

					{/* Modal Images (Scrollable List) */}
					{allImages.map((img, idx) => (
						<img
							key={idx}
							src={img}
							alt={`Certificate View ${idx + 1}`}
							style={{
								display: "block",
								maxWidth: "100%",
								height: "auto",
								margin: "0 auto",
								objectFit: "contain",
								borderRadius: "12px",
								boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
							}}
						/>
					))}
				</Box>
			</Modal>
		</Box>
	)
}

export default Certificate
